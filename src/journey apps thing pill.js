/** @format */

// Hi Nathan,

// I wanted to ask a Journey App Developer
// How I could pass data or a reference to the object as a parameter in functions passed into xml components using the $: notation.

// For example:

<list>
  <list-item query="items">
    <header>{name}</header> // we can pass item fields to xml using this
    notation
    <action on-press="aFunction($selection)" /> // we can pass an item reference
    to a function like this through an action's on-press attribute
    <pill list="$:setPills()" hide-if="$:condition()"></pill> //How can I pass
    either a field or a reference to the item to these functions? The
    documentation for the pill list attribute shows the function code in JS
    taking in an obj parameter but doesn't show how to pass it in the xml and
    nothing I've tried works.
  </list-item>
</list>;
