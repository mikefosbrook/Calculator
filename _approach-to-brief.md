# Calculator

## Buttons
* Numbers
* Operators
* Equals

## Event Handling
* Keypress
* On click
* Tabbing 
(sketchy knowledge of Tab index - aware of it,but it seems pointless if a user has a numerical keypad. 
Thinking about accessibility is influencing decisions on how to appraoch the logic - aware of evaluating string method which would cover key presses and on screen...seems like cheating but also anticiapting it being unavoidable to tab to button 9 without going through all numbers (de-prioritise tab index) )

Accessibility
If css is turned off, does markup have to be sematically written/ Afterall, if JS is turned off the calulator doesn't work.
If someone chooses to turn off css, it would still be nice for the calculator to look like a calculator, but then this requires either a table or divs and rows.
Buttons could be written  
1,2,3,4,5,6,7,8,9,0,
+,-,*,/ 
or they could be
7,8,9,/
4,5,6,*
1,2,3,-
0,.,C

Buttons for x and ÷ are * and / in JS. 

do I need a form when the form output is't going anywhere?


## Approach
Breaking down the calculators functions rather than diving in to code.
Interpretting brief as 1+1, not 1+1+1, however var a (executre operator) var b approach might be too simplistic but we only have 4 hours! 



## Considerations:
Should a user see a display with 0, or be empty?
When a number is clicked first what should happen?
If a user clicks 0 then the display shouldnt add a 0, but this adds extra complexity.
Consider parsing strings using eval or treat as literal exercise because it says use one operator. 

### Calculate function
Calculate function should only be possible if equals button is not disabled.
Perhaps test can be done on calculate button?

Calculate needs at least one operator key press

Visually the operator buttons could use focus as a means of showing which operation is going to happen. 
When a number button is pressed the operator can un focus by default.

Should I have two wells for the values being calculated and just simply take the operator, not even bother with decimal and literally answer the logic side of the brief, focussing on all the front end issues. Or should I shortcut the calculations, take heavy inspiiration from one of the many examples on how to do this and add layers that demonstrate polishing the interface? Frontend roll afterall, not how much I know about computation to do all the things computers do well. 

Separate Calculate action from update display (State)?


...

Now diving into code as I've thought long enough:

Create React app

Searched for example of how to construct a calculator as components to see if it was any more than just button components, a dispaly and a log.
Found an example so simple it was stupid not to use as starting point.

Research led me down one of two paths:
You could try to build from ground up using this, but I'd only be able to code a snippet of that and apply literal calculations on two variables: 
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
or, you could simply do this and use eval and harness the react framework, and focus on tweaking usability, accessibility and implement a test:
https://github.com/niinpatel/calculator-react 





