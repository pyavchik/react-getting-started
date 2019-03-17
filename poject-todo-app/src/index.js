import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input name="text" value="" />
                    <button type="button" disabled="">Add</button>
                </div>
                <div>
                    {/*<ul style="list-style-type: none; padding-left: 0px;">*/}
                    <ul>
                        {/*<li style="text-decoration: line-through; cursor: pointer;">*/}
                        <li>
                            {/*<input type="checkbox" checked="" style="cursor: pointer;" />*/}
                            <input type="checkbox" checked="" />
                                <span>Do First</span>
                                {/*<button type="button" style="cursor: pointer;">×</button>*/}
                                <button type="button">×</button>
                                <small>(258a)</small>
                            </li>
                        {/*<li style="text-decoration: none; cursor: pointer;">*/}
                        <li>
                            {/*<input type="checkbox" style="cursor: pointer;" />*/}
                            <input type="checkbox" />
                                <span>Do Second</span>
                                {/*<button type="button" style="cursor: pointer;">×</button>*/}
                                <button type="button">×</button>
                                <small>(830f)</small>
                        </li>
                        {/*<li style="text-decoration: none; cursor: pointer;">*/}
                        <li>
                            {/*<input type="checkbox" style="cursor: pointer;" />*/}
                            <input type="checkbox"  />
                                <span>Do Third</span>
                                {/*<button type="button" style="cursor: pointer;">×</button>*/}
                                <button type="button">×</button>
                                <small>(13d8)</small>
                        </li>
                        </ul>
                    <div>
                        <p>Show:
                            <a href="#all">
                                <b>All</b>
                            </a>,
                            <a href="#active">Active</a>,
                            <a href="#done">Done</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
