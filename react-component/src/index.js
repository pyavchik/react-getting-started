import React from 'react';
import ReactDOM from 'react-dom';

// class ErrorBoundary extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { hasError: false };
// //     }
// //
// //     static getDerivedStateFromError(error) {
// //         // Update state so the next render will show the fallback UI.
// //         return { hasError: true };
// //     }
// //
// //     componentDidCatch(error, info) {
// //         // Example "componentStack":
// //         //   in ComponentThatThrows (created by App)
// //         //   in ErrorBoundary (created by App)
// //         //   in div (created by App)
// //         //   in App
// //         logComponentStackToMyService(info.componentStack);
// //     }
// //
// //     render() {
// //         if (this.state.hasError) {
// //             // You can render any custom fallback UI
// //             return <h1>Something went wrong.</h1>;
// //         }
// //
// //         return this.props.children;
// //     }
// // }

ReactDOM.render(<h1>hi</h1>, document.getElementById('root'));
//ReactDOM.render(<ErrorBoundary />, document.getElementById('root'));
