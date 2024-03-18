import React from 'react'

function NoPage() {
  return (
    <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div class="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 class="mb-4 text-4xl font-bold">404</h1>
        <p class="text-gray-600">Oops! The page you are looking for could not be found.</p>
        <a href="/" class="mt-4 inline-block rounded bg-pink-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"> Go back to Home </a>
      </div>
    </div>
  )
}

export default NoPage