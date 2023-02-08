import React, { lazy, Suspense } from 'react'

const LazyTestButton = lazy(() => import('app1/TestButton'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <LazyTestButton />
      </Suspense>
    </div>
  )
}

export default App
