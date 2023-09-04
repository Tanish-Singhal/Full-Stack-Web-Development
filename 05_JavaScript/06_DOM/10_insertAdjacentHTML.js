// as in 9th file is seen how to create the element
// but the probelm was that, we can enter new element at the end only
// by this we can enter the element anywhere

// suppose we have to enter the text around the heading-text.
// before-begin => before the div
// after-begin => just inside the div
// before-end => before the end of the div
// after-end => after the div end

let content = document.querySelector(".heading_text");

let ele = document.createElement('b');
ele.textContent = 'ABCD';

content.insertAdjacentElement('beforeBegin', ele);
content.insertAdjacentElement('afterBegin', ele);
content.insertAdjacentElement('beforeEnd', ele);
content.insertAdjacentElement('afterEnd', ele);