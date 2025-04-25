
(https://github.com/acdlite/react-fiber-architecture)

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives

Reconciliation in React is the process by which React updates the DOM efficiently when the state or props of a component change. Instead of re-rendering the whole DOM, React determines what has changed and only updates those specific parts