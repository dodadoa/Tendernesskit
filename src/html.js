import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-analytics.js"></script>
      <script>
        const firebaseConfig = {
          apiKey: "AIzaSyB1N_cqSRDqq4NH54sV2g6yfMBDTD4CIiA",
          authDomain: "tendernesskit.firebaseapp.com",
          projectId: "tendernesskit",
          storageBucket: "tendernesskit.appspot.com",
          messagingSenderId: "797975857976",
          appId: "1:797975857976:web:4615b5cdbd5fda6ea7cfcd",
          measurementId: "G-JL04L7JV61"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
      </script>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
