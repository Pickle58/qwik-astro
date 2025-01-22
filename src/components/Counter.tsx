import { component$, useSignal } from '@builder.io/qwik';
// the `$` suffix for `component` indicates that the component should be
// lazy-loaded.
 const Counter = component$(() => {
    const count = useSignal(0);
   
    // the `$` suffix for `onClick` indicates that the implementation for
    // the handler should be lazy-loaded.
    return <button onClick$={() => count.value++}>{count.value}</button>;
  });

  export default Counter;