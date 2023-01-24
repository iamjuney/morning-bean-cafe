<template>
    <div class="container mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div class="lg:col-span-5 lg:col-start-8">
                <div class="flex justify-between">
                    <h1 class="text-xl font-medium text-gray-900">Americano</h1>
                    <p class="text-xl font-medium text-gray-900">$35</p>
                </div>
                <!-- Reviews -->
                <div class="mt-4">
                    <h2 class="sr-only">Reviews</h2>
                    <div class="flex items-center">
                        <p class="text-sm text-gray-700">
                            3.9
                            <span class="sr-only"> out of 5 stars</span>
                        </p>
                        <div class="ml-1 flex items-center">
                            <!--
                Heroicon name: solid/star

                Active: "text-yellow-400", Inactive: "text-gray-200"
              -->
                            <svg
                                class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <!-- Heroicon name: solid/star -->
                            <svg
                                class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <!-- Heroicon name: solid/star -->
                            <svg
                                class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <!-- Heroicon name: solid/star -->
                            <svg
                                class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>

                            <!-- Heroicon name: solid/star -->
                            <svg
                                class="h-5 w-5 flex-shrink-0 text-gray-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </div>
                        <div
                            aria-hidden="true"
                            class="ml-4 text-sm text-gray-300"
                        >
                            ·
                        </div>
                        <div class="ml-4 flex">
                            <a
                                href="#"
                                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >See all 512 reviews</a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Image gallery -->
            <div
                class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
            >
                <h2 class="sr-only">Images</h2>

                <div
                    class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
                >
                    <img
                        src="coffee/americano.jpg"
                        class="rounded-xl lg:col-span-2 lg:row-span-2"
                    />

                    <!-- <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg"
                        alt="Side profile of women&#039;s Basic Tee in black."
                        class="hidden rounded-lg lg:block"
                    />

                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg"
                        alt="Front of women&#039;s Basic Tee in black."
                        class="hidden rounded-lg lg:block"
                    /> -->
                </div>
            </div>

            <div class="mt-8 lg:col-span-5">
                <form>
                    <!-- Color picker -->
                    <div>
                        <h2 class="text-sm font-medium text-gray-900">Color</h2>

                        <fieldset class="mt-2">
                            <legend class="sr-only">Choose a color</legend>
                            <div class="flex items-center space-x-3">
                                <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                                <label
                                    class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
                                >
                                    <input
                                        type="radio"
                                        name="color-choice"
                                        value="Black"
                                        class="sr-only"
                                        aria-labelledby="color-choice-0-label"
                                    />
                                    <p
                                        id="color-choice-0-label"
                                        class="sr-only"
                                    >
                                        Black
                                    </p>
                                    <span
                                        aria-hidden="true"
                                        class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                                    ></span>
                                </label>

                                <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                                <label
                                    class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                                >
                                    <input
                                        type="radio"
                                        name="color-choice"
                                        value="Heather Grey"
                                        class="sr-only"
                                        aria-labelledby="color-choice-1-label"
                                    />
                                    <p
                                        id="color-choice-1-label"
                                        class="sr-only"
                                    >
                                        Heather Grey
                                    </p>
                                    <span
                                        aria-hidden="true"
                                        class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-400"
                                    ></span>
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <!-- Size picker -->
                    <div class="mt-8">
                        <div class="flex items-center justify-between">
                            <h2 class="text-sm font-medium text-gray-900">
                                Size
                            </h2>
                            <!-- <a
                                href="#"
                                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >See sizing chart</a
                            > -->
                        </div>

                        <fieldset class="mt-2">
                            <legend class="sr-only">Choose a size</legend>
                            <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                <!--
                  In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                  Active: "ring-2 ring-offset-2 ring-indigo-500"
                  Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                -->
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="XXS"
                                        class="sr-only"
                                        aria-labelledby="size-choice-0-label"
                                    />
                                    <p id="size-choice-0-label">XXS</p>
                                </label>

                                <!--
                  In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                  Active: "ring-2 ring-offset-2 ring-indigo-500"
                  Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                -->
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="XS"
                                        class="sr-only"
                                        aria-labelledby="size-choice-1-label"
                                    />
                                    <p id="size-choice-1-label">XS</p>
                                </label>

                                <!--
                  In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                  Active: "ring-2 ring-offset-2 ring-indigo-500"
                  Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                -->
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="S"
                                        class="sr-only"
                                        aria-labelledby="size-choice-2-label"
                                    />
                                    <p id="size-choice-2-label">S</p>
                                </label>

                                <!--
                  In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                  Active: "ring-2 ring-offset-2 ring-indigo-500"
                  Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                -->
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="M"
                                        class="sr-only"
                                        aria-labelledby="size-choice-3-label"
                                    />
                                    <p id="size-choice-3-label">M</p>
                                </label>

                                <!--
                  In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                  Active: "ring-2 ring-offset-2 ring-indigo-500"
                  Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                -->
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="L"
                                        class="sr-only"
                                        aria-labelledby="size-choice-4-label"
                                    />
                                    <p id="size-choice-4-label">L</p>
                                </label>

                                <!--
                  In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                  Active: "ring-2 ring-offset-2 ring-indigo-500"
                  Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                -->
                                <label
                                    class="flex cursor-not-allowed items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase opacity-25 sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="XL"
                                        disabled
                                        class="sr-only"
                                        aria-labelledby="size-choice-5-label"
                                    />
                                    <p id="size-choice-5-label">XL</p>
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <button
                        type="submit"
                        class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add to cart
                    </button>
                </form>

                <!-- Product details -->
                <div class="mt-10">
                    <h2 class="text-sm font-medium text-gray-900">
                        Description
                    </h2>

                    <div class="prose prose-sm mt-4 text-gray-500">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit, cumque eveniet ipsum a
                            necessitatibus nostrum ut magnam pariatur ullam
                            culpa doloribus, similique provident excepturi quae
                            aut velit consectetur dolor corporis?
                        </p>
                        <p>
                            <!-- Looking to stock your closet? The Basic tee also
                            comes in a 3-pack or 5-pack at a bundle discount. -->
                        </p>
                    </div>
                </div>

                <!-- <div class="mt-8 border-t border-gray-200 pt-8">
                    <h2 class="text-sm font-medium text-gray-900">
                        Fabric &amp; Care
                    </h2>

                    <div class="prose prose-sm mt-4 text-gray-500">
                        <ul role="list">
                            <li>Only the best materials</li>

                            <li>Ethically and locally made</li>

                            <li>Pre-washed and pre-shrunk</li>

                            <li>Machine wash cold with similar colors</li>
                        </ul>
                    </div>
                </div> -->

                <!-- Policies -->
                <section aria-labelledby="policies-heading" class="mt-10">
                    <h2 id="policies-heading" class="sr-only">Our Policies</h2>

                    <dl
                        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                    >
                        <div
                            class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                        >
                            <dt>
                                <!-- Heroicon name: outline/globe -->
                                <svg
                                    class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span
                                    class="mt-4 text-sm font-medium text-gray-900"
                                >
                                    International delivery
                                </span>
                            </dt>
                            <dd class="mt-1 text-sm text-gray-500">
                                Get your order in 2 years
                            </dd>
                        </div>

                        <div
                            class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                        >
                            <dt>
                                <!-- Heroicon name: outline/currency-dollar -->
                                <svg
                                    class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span
                                    class="mt-4 text-sm font-medium text-gray-900"
                                >
                                    Loyalty rewards
                                </span>
                            </dt>
                            <dd class="mt-1 text-sm text-gray-500">
                                Don&#039;t look at other tees
                            </dd>
                        </div>
                    </dl>
                </section>
            </div>
        </div>

        <!-- Reviews -->
        <section aria-labelledby="reviews-heading" class="mt-16 sm:mt-24">
            <h2 id="reviews-heading" class="text-lg font-medium text-gray-900">
                Recent reviews
            </h2>

            <div
                class="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10"
            >
                <div class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div
                        class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8"
                    >
                        <div class="flex items-center xl:col-span-1">
                            <div class="flex items-center">
                                <!--
                  Heroicon name: solid/star

                  Active: "text-yellow-400", Inactive: "text-gray-200"
                -->
                                <svg
                                    class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>

                                <!-- Heroicon name: solid/star -->
                                <svg
                                    class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>

                                <!-- Heroicon name: solid/star -->
                                <svg
                                    class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>

                                <!-- Heroicon name: solid/star -->
                                <svg
                                    class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>

                                <!-- Heroicon name: solid/star -->
                                <svg
                                    class="h-5 w-5 flex-shrink-0 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                            </div>
                            <p class="ml-3 text-sm text-gray-700">
                                5<span class="sr-only"> out of 5 stars</span>
                            </p>
                        </div>

                        <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                            <h3 class="text-sm font-medium text-gray-900">
                                Can&#039;t say enough good things
                            </h3>

                            <div class="mt-3 space-y-6 text-sm text-gray-500">
                                <p>
                                    I was really pleased with the overall
                                    shopping experience. My order even included
                                    a little personal, handwritten note, which
                                    delighted me!
                                </p>
                                <p>
                                    The product quality is amazing, it looks and
                                    feel even better than I had anticipated.
                                    Brilliant stuff! I would gladly recommend
                                    this store to my friends. And, now that I
                                    think of it... I actually have, many times!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3"
                    >
                        <p class="font-medium text-gray-900">Risako M</p>
                        <time
                            datetime="2021-01-06"
                            class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                            >May 16, 2021</time
                        >
                    </div>
                </div>

                <!-- More reviews... -->
            </div>
        </section>
    </div>
</template>
