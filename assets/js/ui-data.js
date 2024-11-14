const addNewMemberModal = [
	{
		"element": "section",
		"attributes": [
			{
				"class": "modal modal--closed",
				"id": "modal--data",
				"aria-hidden": true,
				"aria-modal": true,
				"aria-labelledby": "add-datum__title",
				"role": "dialog"
			}
		],
		"children": [
			{
				"element": "form",
				"attributes": [
					{
						"class": "add-datum"
					}
				],
				"children": [
					{
						"element": "h2",
						"attributes": [
							{
								"class": "add-datum__title",
								"id": "add-datum__title"
							}
						],
						"text": "Add new member"
					},
					{
						"element": "fieldset",
						"attributes": [
							{
								"class": "add-datum__ui"
							}
						],
						"children": [
							{
								"element": "div",
								"attributes": [
									{
										"class": "add-datum__pair"
									}
								],
								"children": [
									{
										"element": "label",
										"attributes": [
											{
												"class": "add-datum__label",
												"for": "add-datum__input--name"
											}
										],
										"text": "Name"
									},
									{
										"element": "input",
										"attributes": [
											{
												"class": "add-datum__input",
												"id": "add-datum__input--name",
												"type": "text",
												"aria-required": true
											}
										]
									}
								]
							},
							{
								"element": "div",
								"attributes": [
									{
										"class": "add-datum__pair"
									}
								],
								"children": [
									{
										"element": "label",
										"attributes": [
											{
												"class": "add-datum__label",
												"for": "add-datum__input--desc"
											}
										],
										"text": "Description"
									},
									{
										"element": "input",
										"attributes": [
											{
												"class": "add-datum__input",
												"id": "add-datum__input--desc",
												"type": "text",
												"aria-required": true
											}
										]
									}
								]
							},
							{
								"element": "div",
								"attributes": [
									{
										"class": "add-datum__pair"
									}
								],
								"children": [
									{
										"element": "label",
										"attributes": [
											{
												"class": "add-datum__label",
												"for": "add-datum__input--fruit"
											}
										],
										"text": "Favorite fruit"
									},
									{
										"element": "input",
										"attributes": [
											{
												"class": "add-datum__input",
												"id": "add-datum__input--fruit",
												"type": "text",
												"aria-required": true
											}
										]
									}
								]
							},
							{
								"element": "div",
								"attributes": [
									{
										"class": "add-datum__error-container"
									}
								]
							},
							{
								"element": "div",
								"attributes": [
									{
										"class": "add-datum__buttons"
									}
								],
								"children": [
									{
										"element": "button",
										"attributes": [
											{
												"class": "btn btn--cancel"
											}
										],
										"text": "Cancel"
									},
									{
										"element": "input",
										"attributes": [
											{
												"class": "btn btn--submit",
												"type": "submit",
												"value": "Submit"
											}
										]
									},
								]
							},
						]
					}
				]
			}
		]
	}
];

const newDatum = [
	{
		"element": "div",
		"attributes": [
			{
				"class": "datum datum--init",
				"id": ""
			}
		],
		"children": [
			{
				"element": "h3",
				"attributes": [
					{
						"class": "datum__title"
					}
				],
				"text": ""
			},
			{
				"element": "ul",
				"attributes": [
					{
						"class": "datum__description"
					}
				],
				"children": [
					{
						"element": "li",
						"children": [
							{
								"element": "span",
								"attributes": [
									{
										"class": "datum__key"
									}
								],
								"text": "Description: "
							},
							{
								"element": "span",
								"attributes": [
									{
										"class": "datum__value"
									}
								],
								"text": ""
							},
						]
					},
					{
						"element": "li",
						"children": [
							{
								"element": "span",
								"attributes": [
									{
										"class": "datum__key"
									}
								],
								"text": "Favorite fruit: "
							},
							{
								"element": "span",
								"attributes": [
									{
										"class": "datum__value"
									}
								],
								"text": ""
							}
						]
					}
				]
			}
		]
	}
];

const addNewMemberButton = [
	{
		"element": "button",
		"attributes": [
			{
				"id": "btn--add",
				"class": "btn",
				"aria-controls": "modal--data"
			}
		],
		"text": "Add new member"
	}
];

const addDataErrorMessage = [
	{
		"element": "p",
		"attributes": [
			{
				"id": "add-datum__error",
				"class": "add-datum__error alert"
			}
		],
		"text": "Please fill in all fields before submitting."
	}
];