import React from 'react'

function Team() {
  return (
    <div class="team-2 py-20 min-h-screen">
  <div class="container mx-auto px-4">

    <div class="md:w-10/12 xl:w-8/12 md:mx-auto">
      <h1 class="font-medium text-3xl md:text-4xl text-white text-center mb-4">Our Crew</h1>
      <p class="text-xl text-gray-400 text-center">We have the best of players in our team who created the <a href="//free-website-resources.com" class="inline-block font-semibold text-white">FWR Blocks</a>. You can learn more about our team and company culture by visiting each member's profile. If you are interested to join our company, you can shoot us an <a href="mailto:" class="inline-block font-semibold text-white">email</a></p>
    </div>

    <div class="md:flex md:-mx-4 px-4 md:px-0">

      <div class="team-profile-wrap  mx-auto md:w-1/3 px-4 md:py-12">
        <div class="team-profile text-center p-6">
          <div class="team-profile-image w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img src="https://imageio.forbes.com/specials-images/imageserve/61b21324be4442b6af54ff62/0x0.jpg?format=jpg&width=1200" alt="profile image" class="max-w-full h-[144px]"/>
          </div>
          <h5 class="text-gray-600 font-semibold uppercase mt-4 mb-2">John Doe</h5>
          <p class="text-gray-600 text-sm">Lead Designer</p>
          <div class="text-center mt-6">
            <a href="" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-linkedin-in"></span>
            </a>
            <a href="" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-behance"></span>
            </a>
            <a href="" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-dribbble"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="team-profile-wrap mx-auto md:w-1/3 px-4 md:py-12">
        <div class="team-profile text-center p-6">
          <div class="team-profile-image w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img src="https://newscreds.com/wp-content/uploads/2022/05/software-developer-coding.jpg" alt="profile image" class="max-w-full h-[144px]"/>
          </div>
          <h5 class="text-gray-600 font-semibold uppercase mt-4 mb-2">Mary Jane</h5>
          <p class="text-gray-600 text-sm">Lead Developer</p>
          <div class="text-center mt-6">
            <a href="#" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-linkedin-in"></span>
            </a>
            <a href="#" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-behance"></span>
            </a>
            <a href="#" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-dribbble"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="team-profile-wrap  mx-auto md:w-1/3 px-4 md:py-12">
        <div class="team-profile text-center p-6">
          <div class="team-profile-image w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img src="https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/good-software-developer-1128x635.jpg" alt="profile image" class="max-w-full h-[144px]"/>
          </div>
          <h5 class="text-gray-600 font-semibold uppercase mt-4 mb-2">Josh Thompson</h5>
          <p class="text-gray-600 text-sm">Marketing Manager</p>
          <div class="text-center mt-6">
            <a href="#" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-linkedin-in"></span>
            </a>
            <a href="#" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-behance"></span>
            </a>
            <a href="#" class="w-10 h-10 inline-block overflow-hidden text-gray-500">
              <span class="fab fa-dribbble"></span>
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
  )
}

export default Team