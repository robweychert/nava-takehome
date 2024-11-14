document.addEventListener('DOMContentLoaded', (event) => {

//----------------------------------------
// FUNCTIONS
//----------------------------------------

	function jsonToHtml(container,jsonData) {
		if (typeof jsonData === 'object' && jsonData.length === 1) {
			let object = jsonData[0];
			const jsonTree = [object];
			const domTree = [container];
			let continueBuild = true;
			while (continueBuild) {
				const objectKeys = Object.keys(object);
				if (objectKeys.includes('element')) {
					const objectParent = jsonTree[jsonTree.length - 1];
					let element;
					let svgNS = false;
					if (object['element'] === 'svg') {
						svgNS = true;
					} else {
						for (i=0; i < jsonTree.length; i++) {
							if (jsonTree[i]['element'] === 'svg') {
								svgNS = true;
							}
						}
					}
					if (svgNS) {
						element = document.createElementNS('http://www.w3.org/2000/svg', object['element']);
					} else {
						element = document.createElement(object['element']);
					}
					if (objectKeys.includes('attributes')) {
						const attrKeys = Object.keys(object['attributes'][0]);
						for (let i=0; i < attrKeys.length; i++) {
							const attribute = attrKeys[i];
							element.setAttribute(attribute, object['attributes'][0][attribute]);
						}
					}
					if (objectKeys.includes('text')) {
						element.innerHTML = object['text'];
					}
					domTree[domTree.length - 1].appendChild(element);
					// If this object has children
					if (objectKeys.includes('children')) {
						// Add the object to the family tree
						jsonTree.push(object);
						domTree.push(element);
						// The object is now the object's first child
						object = object['children'][0];
					// If the object doesn't have children and isn't the root object
					} else if (object === jsonData[0]) {
						continueBuild = false;
					} else {
						let continueTreeLoop = false;
						while (!(continueTreeLoop)) {
							const jsonParent = jsonTree[jsonTree.length - 1];
							const objectIndex = jsonParent['children'].indexOf(object);
							// If the object isn't the last child of its parent object
							if (objectIndex < jsonParent['children'].length - 1) {
								// The object is now the next child in the list
								object = jsonParent['children'][objectIndex + 1];
								continueTreeLoop = true;
							// If the object is the last child of its parent object
							} else {
								// If the parent object is not the root object
								if (jsonParent != jsonData[0]) {
									// The object is now its parent object
									object = jsonParent;
									// Delete the parent object from the family tree
									jsonTree.pop();
									domTree.pop();
								} else {
									// The build is complete
									continueBuild = false;
									// Stop looping through the JSON data
									break;
								}
							}
						}
					}
				} else {
					console.log('The JSON data is missing an `element` key.');
					break;
				}
			}
		} else {
			console.log('The provided data either is not a JSON object or its root has more than one direct descendant.');
		}
	}

	// https://orangeable.com/javascript/slugify
	function slugify(str) {
	  return str
	    .toLowerCase()
	    .trim()
	    .replace(/[^\w\s-]/g, "")
	    .replace(/[\s_-]+/g, "-")
	    .replace(/^-+|-+$/g, "");
	}

	function toggleModal() {
		if (!modal.hasAttribute('aria-hidden')) {
			setTimeout(
				function() {
					modal.setAttribute('aria-hidden', true);
					inputs.forEach(function(input) {
						input.value = '';
						input.removeAttribute('aria-invalid');
						input.removeAttribute('aria-errormessage');
					});
					const error = document.getElementById('add-datum__error');
					if (error !== null) {
						error.remove();
					}
				},
			250);
			modal.classList.remove('modal--open');
			modal.classList.add('modal--closed');
		} else {
			modal.removeAttribute('aria-hidden');
			modal.classList.remove('modal--closed');
			modal.classList.add('modal--open');
		}
		document.getElementById('btn--add').toggleAttribute('disabled');
	}

	function submitForm() {
		let dataValid = true;
		inputs.forEach(function(input) {
			if (input.value === '' || input.value === null) {
				dataValid = false;
				if (!input.classList.contains('add-datum__input--error')) {
					input.setAttribute('aria-invalid', true);
					input.setAttribute('aria-errormessage', 'add-datum__error');
				}
			} else if (input.hasAttribute('aria-invalid')) {
				input.removeAttribute('aria-invalid');
				input.removeAttribute('aria-errormessage');
			}
		});
		if (!dataValid) {
			if (document.querySelector('.add-datum__error') === null) {
				jsonToHtml(modal.querySelector('.add-datum__error-container'),addDataErrorMessage);
			}
		} else {
			newDatum[0]['attributes'][0]['id'] = slugify(inputs[0].value);
			newDatum[0]['children'][0]['text'] = inputs[0].value;
			for (let i=1; i<inputs.length; i++) {
				newDatum[0]['children'][1]['children'][i-1]['children'][1]['text'] = inputs[i].value;
			}
			jsonToHtml(document.querySelector('.data'),newDatum);
			toggleModal();
		}
	}

//----------------------------------------
// ADD PAGE FUNCTIONALITY
//----------------------------------------

	const section = document.querySelector('.section--household');

	// Add the modal
	jsonToHtml(section,addNewMemberModal);
	const modal = document.getElementById('modal--data');
	const inputs = modal.querySelectorAll(".add-datum__input");

	// Give focus to the modal's first input
	modal.querySelector('.add-datum__input').focus();

	// Add modal functionality to the cancel button
	document.querySelector('.btn--cancel').addEventListener('click', function(e) {
		e.preventDefault();
		toggleModal();
	});

	// Add modal functionality to the submit button
	modal.querySelector('.btn--submit').addEventListener('click', function(e) {
		e.preventDefault();
		submitForm();
	});

	// Add modal functionality to the Escape and Enter keys
	document.addEventListener('keydown', function(e) {
		let key = e.key || e.keyCode;
		if ((key === 'Escape' || key === 'Esc' || key === 27) && !modal.hasAttribute('aria-hidden')) {
			toggleModal();
		} else if (document.activeElement.classList.contains('add-datum__input') && (key === 'Enter' || key === 13)) {
			e.preventDefault();
			submitForm();
		}
	});

	// Add the 'Add new member' button
	jsonToHtml(section,addNewMemberButton);
	document.getElementById('btn--add').addEventListener('click', function(e) {
		e.preventDefault();
		toggleModal();
	});

	// Remove the 'enable JavaScript' alert
	document.getElementById("enable-js").remove();

});