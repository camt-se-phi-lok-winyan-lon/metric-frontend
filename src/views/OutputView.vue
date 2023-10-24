<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-slate-900 h-full">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl text-white">
          Get started <span class="text-Macrage-blue">Here!</span>
        </h1>

        <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-start justify-between">
            <p
              class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
              tabindex="0"
            >
              Name
            </p>
          </div>

          <div class="mt-2">
            <p class="mt-2 text-gray-600 dark:text-gray-300">Lint score :</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Test percentage:</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Test coverage:</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Test coverage grade:</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Document score:</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Reuseability:</p>
            <p
              class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            >
              URL LINK
            </p>
          </div>

          <div class="flex items-center justify-between mt-4">
            <p class="mt-2 text-gray-600 dark:text-gray-300">Activeness:</p>

            <div class="flex items-center">
              <a
                class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                tabindex="0"
                role="link"
                >Grade: "A"</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://media.tenor.com/VFFJ8Ei3C2IAAAAC/rickroll-rick.gif"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
