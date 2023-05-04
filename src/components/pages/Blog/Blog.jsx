import React from 'react';
import ReactDOM from "react-dom";
import Pdf from 'react-to-pdf';


const ref = React.createRef();
const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className='text-center mb-5'>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button className='bg-danger border-0 text-white px-3 py-2 rounded' onClick={toPdf}>Convert to pdf</button>}
            </Pdf>
            </div>
            <div ref={ref}>
                <div >
                    <h2>i. Differences between uncontrolled and controlled components</h2>
                    <p>Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM. In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </div>

                <div>
                    <h2>ii. How to validate React props using PropTypes</h2>
                    <p>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
                        1.  PropTypes.any: The prop can be of any data type<br />
                        2.  PropTypes.bool: The prop should be a Boolean<br />
                        3.  PropTypes.number: The prop should be a number<br />
                        4.  PropTypes.string: The prop should be a string<br />
                        5.  PropTypes.func: The prop should be a function<br />
                        6.  PropTypes.array: The prop should be an array<br />
                        7.  PropTypes.object: The prop should be an object<br />
                        8.  PropTypes.symbol: The prop should be a symbol
                    </p>
                </div>

                <div>
                    <h2>iii. Difference between nodejs and express js.</h2>
                    <p>NodeJS: Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. Node js is not a programming language it is a framework. Node.js is use for building back-end services like APIs like Web App or Mobile App. It's used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.<br />
                        ExpressJS: Express is a small framework that sits on top of Node.js's web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize application's functionality with middle ware and routing. It adds helpful utilities to Node.js's HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                    </p>
                </div>

                <div>
                    <h2>iv. What is a custom hook, and why will you create a custom hook?</h2>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;