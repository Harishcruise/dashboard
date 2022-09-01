import React from 'react'

function Project() {
  return (
    <div>
    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start px-5">
      <div class="grid gap-6 mt-20">
        <h2 class="text-2xl font-medium flex items-center ">Backlog<svg class="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg></h2>
        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-pink-200">
          <a class="font-medium capitalize text-lg" href="#">task name</a>

          <span class="flex items-center text-gray-500">Design<span class="bg-pink-400 rounded-full w-3 h-3 ml-1.5"></span></span>
          <p class="text-gray-500">Description</p>

          <div class="flex items-center mt-8">

            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Alex Doe" class="rounded-full w-9 h-9 object-cover"/>
            <span class="text-gray-500 ml-4">08/07/22</span>
            <span class="text-gray-500 font-medium text-right lg:bg-red-400 lg:text-white lg:rounded-full lg:w-5 lg:h-5 xl:w-auto xl:h-auto lg:flex lg:justify-center lg:items-center lg:text-xs xl:text-gray-500 xl:bg-transparent xl:text-base ml-auto xl:inline-block">2 <span class="inline lg:hidden xl:inline">subtasks</span></span>
          </div>

        </div>
        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-yellow-200">
          <a class="font-medium capitalize text-lg" href="#">task name</a>

          <span class="flex items-center text-gray-500">Feature<span class="bg-yellow-400 rounded-full w-3 h-3 ml-1.5"></span></span>
          <p class="text-gray-500">Description</p>

          <div class="flex items-center mt-8">

            <img src="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Annie Doe" class="rounded-full w-9 h-9 object-cover"/>
            <span class="text-gray-500 ml-4">28/05/22</span>
          </div>

        </div>
      </div>

      <div class="grid gap-6 mt-20">
        <h2 class="text-2xl font-medium flex items-center">In Progress<svg class="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg></h2>
        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-yellow-200">
          <a class="font-medium capitalize text-lg" href="#">task name</a>

          <span class="flex items-center text-gray-500">Feature<span class="bg-yellow-400 rounded-full w-3 h-3 ml-1.5"></span></span>
          <p class="text-gray-500">Description</p>

          <div class="flex items-center mt-8">

            <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="James Doe" class="rounded-full w-9 h-9 object-cover"/>
            <span class="text-gray-500 ml-4">15/06/22</span>
          </div>

        </div>
        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-green-200">
          <a class="font-medium capitalize text-lg" href="#">task name</a>

          <span class="flex items-center text-gray-500">Improvement<span class="bg-green-400 rounded-full w-3 h-3 ml-1.5"></span></span>
          <p class="text-gray-500">Description</p>

          <div class="flex items-center mt-8">

            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Annie Doe" class="rounded-full w-9 h-9 object-cover"/>
            <span class="text-gray-500 ml-4">22/05/22</span>
          </div>

        </div>
      </div>
      <div class="grid gap-6 mt-20">
        <h2 class="text-2xl font-medium flex items-center">Review<svg class="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg></h2>
        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-blue-200">
          <a class="font-medium capitalize text-lg" href="#">task name</a>

          <span class="flex items-center text-gray-500">Bug<span class="bg-blue-400 rounded-full w-3 h-3 ml-1.5"></span></span>
          <p class="text-gray-500">Description</p>

          <div class="flex items-center mt-8">

            <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Annie Doe" class="rounded-full w-9 h-9 object-cover"/>
            <span class="text-gray-500 ml-4">03/06/22</span>
          </div>

        </div>

      </div>

    </section>
  </div>
  )
}

export default Project