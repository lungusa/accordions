# accordions
home for accordion or expand/collapse code.


template.html
- this is the standard HTML with inline javascript/jQuery. it will be the most up-to-date version here.
- the most common error is the `tabindex="0"` attribute being omitted. make sure each attribute is there if something isn't working. this MUST be placed for keyboard functionality/ADA compliance!!


react-template.html
this is being developed. without touching any of the other code, the only item that needs to be edited by the Content Team is the javascript object.

  `this.state =  { accordionContent: [ {}, {}, {} ]`

the title and content are placed in those empty objects.

  `this.state =  { accordionContent: [ {title: "", content: ""} ] }`

for example:

`this.state =  
  {
    accordionContent:
      [
        {
          title: "Lung Cancer Basics",
          content: "<p>Lung cancer happens when cells in the lung mutate</p>"
        },
        {
          title: "Lung Cancer Causes and Risk Factors",
          content: "<p>Anyone can get lung cancer</p>"
        }
       ]
  };`

The most important thing when working with this format is that commas are not forgotten. You can use JSHint online to identify broken syntax if you cannot find it yourself.
