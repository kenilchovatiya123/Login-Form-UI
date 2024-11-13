import GoogleImg from './assets/google-icon.svg'

function App() {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <div className="relative flex flex-col bg-gray-700 m-10 rounded-2xl space-y-8 shadow-2xl md:flex-row md:space-y-0">

          {/* left side */}
          <div class="relative m-4">
            <div className="absolute hidden top-6 right-6 py-2 px-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full drop-shadow-sm md:block"
            >
              <span className="text-white text-sm font-light">
                Back to website
              </span>
            </div>
            <div className="absolute hidden top-6 left-6 py-2 px-6 md:block"
            >
              <span className="text-white text-base font-bold">
                LOGIN FORM
              </span>
            </div>
            <img
              src="https://images.pexels.com/photos/20694723/pexels-photo-20694723/free-photo-of-monitor-on-desk.jpeg"
              alt="img"
              className="w-[400px] h-full hidden rounded-2xl md:block object-cover"
            />
          </div>

          {/* right side */}
          <div className="flex flex-col justify-center text-white p-10">
            <span className="text-4xl font-normal">Create an account</span>
            <span className="text-sm font-light text-gray-300 mt-4 mb-12">
              Already have an account?
              <a href="#" className="text-violet-500 underline ml-1">
                Log in
              </a>
            </span>
            <div className="flex justify-between">
              <div className="py-0.5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 rounded-sm border-none placeholder:text-gray-400 placeholder:font-normal placeholder:p-2 text-black hover:border-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 rounded-sm ml-4 placeholder:text-gray-400 placeholder:font-normal placeholder:p-2 text-black"
                />
              </div>
            </div>
            <div className="py-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-none rounded-sm placeholder:text-gray-400 placeholder:font-normal placeholder:p-2 text-black"
              />
            </div>
            <div className="py-1">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border-none rounded-sm placeholder:text-gray-400 placeholder:font-normal placeholder:p-2 text-black"
              />
            </div>
            <div className="flex py-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-violet-500 bg-gray-100 border-gray-200 rounded focus:ring-violet-600"
                />
                <label
                  className="ms-2 text-sm font-medium text-gray-300">
                  I agree with the
                  <a href="#" class="text-violet-700 hover:underline ml-1 underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
            </div>
            <button className="my-8 w-full p-2.5 border-none rounded-sm bg-violet-700 hover:bg-violet-800 text-base font-medium">
              Create account
            </button>
            <div className="flex my-[-16px]">
              <div className="flex items-center">
                <hr className="w-[140px] ms-2" />
                <span className="text-sm font-light mx-2 text-gray-300">or register with</span>
                <hr className="w-[140px]" />
              </div>
            </div>

            <button className="my-8 w-full p-2.5 rounded-sm bg-transparent text-base font-medium border border-violet-700">
              <img src={GoogleImg} alt="img" class="w-5 h-5 inline mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
