/*
 * Starter file
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Window loaded!");
    const encryptIt = document.getElementById("encrypt-it");
    encryptIt.addEventListener("click", handleClick, false);
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  function handleClick() {
    console.log("Button Clicked!");
    const textInput = document.getElementById("input-text");
    const textOutput = document.getElementById("result");
    const reverseOutput = document.getElementById("reverse");
    textOutput.textContent = shiftCipher(textInput.value);
    reverseOutput.textContent = reverseCipher(textInput.value);
  }
  // shifts the a-z and A-Z characters once to the right i.e. a->b z->a
  function shiftCipher(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= "a".charCodeAt(0) && text.charCodeAt(i) <= "z".charCodeAt(0)) {
        result += String.fromCharCode(((text.charCodeAt(i) + 1 - "a".charCodeAt(0)) % 26) + "a".charCodeAt(0));
      } else if (text.charCodeAt(i) >= "A".charCodeAt(0) && text.charCodeAt(i) <= "Z".charCodeAt(0)) {
        result += String.fromCharCode(((text.charCodeAt(i) + 1 - "A".charCodeAt(0)) % 26) + "A".charCodeAt(0));
      } else {
        result += text[i];
      }
    }
    return result;
  }
  // added a section for reversing the cipher, in case you want to read an encrypted text, or check that the cipher works
  function reverseCipher(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= "a".charCodeAt(0) && text.charCodeAt(i) <= "z".charCodeAt(0)) {
        result += String.fromCharCode(mod(text.charCodeAt(i) - 1 - "a".charCodeAt(0), 26) + "a".charCodeAt(0));
      } else if (text.charCodeAt(i) >= "A".charCodeAt(0) && text.charCodeAt(i) <= "Z".charCodeAt(0)) {
        result += String.fromCharCode(mod(text.charCodeAt(i) - 1 - "A".charCodeAt(0), 26) + "A".charCodeAt(0));
      } else {
        result += text[i];
      }
    }
    return result;
  }
  // this mod function is only used for reverseCipher, as javascript uses remainder rather than modulo (which returns negative values)
  // however since we need the positive values this simply performs the modulo
  function mod(a, n) {
    let result = ((a % n) + n) % n;
    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
})();
