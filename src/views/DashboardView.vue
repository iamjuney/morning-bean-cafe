<template>
    <header class="bg-white shadow">
        <div
            class="mx-auto max-w-7xl px-2 py-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8"
        >
            <div class="relative flex h-16 justify-between">
                <div class="relative z-10 flex px-2 lg:px-0">
                    <div
                        class="flex flex-shrink-0 items-center text-xl font-light"
                    >
                        <img
                            class="block h-10 w-auto"
                            src="logo.png"
                            alt="Workflow"
                        />
                        Morning Bean Coffee
                    </div>
                </div>
                <div
                    class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0"
                >
                    <div class="w-full sm:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <!-- Heroicon name: solid/search -->
                                <svg
                                    class="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                id="search"
                                name="search"
                                class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div>
                <div class="relative z-10 flex items-center lg:hidden">
                    <!-- Mobile menu button -->
                    <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open menu</span>
                        <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
                        <svg
                            class="block h-6 w-6"
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
                        <svg
                            class="hidden h-6 w-6"
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center"
                >
                    <div class="ml-4 flow-root lg:ml-8">
                        <a href="#" class="group -m-2 flex items-center p-2">
                            <!-- Heroicon name: outline/shopping-bag -->
                            <svg
                                class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <span
                                class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                >0</span
                            >
                            <span class="sr-only">items in cart, view bag</span>
                        </a>
                    </div>

                    <!-- Profile dropdown -->
                    <div class="relative ml-4 flex-shrink-0">
                        <div>
                            <button
                                type="button"
                                class="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span class="sr-only">Open user menu</span>
                                <img
                                    class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </button>
                        </div>

                        <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
                        <!-- <div
                            class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-0"
                                >Your Profile</a
                            >

                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-1"
                                >Settings</a
                            >

                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-2"
                                >Sign out</a
                            >
                        </div> -->
                    </div>
                </div>
            </div>

            <nav
                class="hidden lg:flex lg:space-x-8 lg:py-2"
                aria-label="Global"
            >
                <a
                    href="#"
                    class="inline-flex items-center rounded-md bg-gray-100 py-2 px-3 text-sm font-medium text-gray-900"
                    aria-current="page"
                >
                    Coffees
                </a>

                <a
                    href="#"
                    class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                >
                    Teas
                </a>

                <a
                    href="#"
                    class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                >
                    Drinks
                </a>

                <a
                    href="#"
                    class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                >
                    Frappee
                </a>
            </nav>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
                <a
                    href="#"
                    class="block rounded-md bg-gray-100 py-2 px-3 text-base font-medium text-gray-900"
                    aria-current="page"
                    >Dashboard</a
                >

                <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                    >Team</a
                >

                <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                    >Projects</a
                >

                <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                    >Calendar</a
                >
            </div>
            <div class="border-t border-gray-200 pt-4 pb-3">
                <div class="flex items-center px-4">
                    <div class="flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium text-gray-800">
                            Tom Cook
                        </div>
                        <div class="text-sm font-medium text-gray-500">
                            tom@example.com
                        </div>
                    </div>
                    <button
                        type="button"
                        class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg
                            class="h-6 w-6"
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
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-3 space-y-1 px-2">
                    <a
                        href="#"
                        class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >Your Profile</a
                    >

                    <a
                        href="#"
                        class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >Settings</a
                    >

                    <a
                        href="#"
                        class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >Sign out</a
                    >
                </div>
            </div>
        </nav>
    </header>

    <div class="container mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative bg-white">
            <div class="flex flex-col border-b border-gray-200 lg:border-0">
                <div
                    aria-hidden="true"
                    class="absolute hidden h-full w-1/2 bg-secondary lg:block lg:rounded-l-xl"
                ></div>
                <div class="relative bg-secondary lg:bg-transparent">
                    <div
                        class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-16"
                    >
                        <div
                            class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-16"
                        >
                            <div class="lg:pr-16">
                                <h1
                                    class="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl xl:text-6xl"
                                >
                                    New Year's Sale
                                </h1>
                                <p class="text-md mt-4 text-primary">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Vero ut error consectetur
                                    voluptas ex quos eligendi, dolorum nulla.
                                </p>
                                <div class="mt-6">
                                    <a
                                        href="#"
                                        class="inline-block rounded-md border border-primary py-3 px-8 font-medium text-white"
                                        >Start Shopping</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="h-48 w-full overflow-hidden sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 lg:rounded-r-xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        class="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
        </div>

        <div class="mx-auto mt-8 max-w-7xl">
            <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                <select
                    id="tabs"
                    name="tabs"
                    class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option>My Account</option>

                    <option>Company</option>

                    <option selected>Team Members</option>

                    <option>Billing</option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="flex space-x-4" aria-label="Tabs">
                    <a
                        href="#"
                        class="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
                        aria-current="page"
                    >
                        Popular
                    </a>
                    <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
                    <a
                        href="#"
                        class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        Expresso Shots
                    </a>

                    <a
                        href="#"
                        class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        Cold Brew
                    </a>

                    <a
                        href="#"
                        class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        Lattes
                    </a>

                    <a
                        href="#"
                        class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        Americanos
                    </a>
                </nav>
            </div>
        </div>

        <section>
            <div class="mx-auto mt-8 max-w-7xl">
                <div class="md:flex md:items-center md:justify-between">
                    <h2
                        id="favorites-heading"
                        class="text-2xl font-extrabold tracking-tight text-gray-900"
                    >
                        Popular
                    </h2>
                    <!-- <a
                        href="#"
                        class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
                        >Browse all<span aria-hidden="true"> &rarr;</span></a
                    > -->
                </div>

                <div
                    class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
                >
                    <div class="group relative">
                        <div
                            class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                        >
                            <img
                                src="coffee/americano.jpg"
                                alt="Hand stitched, orange leather long wallet."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Americano
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Natural</p>
                        <p class="mt-1 text-sm font-medium text-gray-900">
                            $75
                        </p>
                    </div>

                    <div class="group relative">
                        <div
                            class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                        >
                            <img
                                src="coffee/cappucino.jpg"
                                alt="Hand stitched, orange leather long wallet."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Cappucino
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Natural</p>
                        <p class="mt-1 text-sm font-medium text-gray-900">
                            $75
                        </p>
                    </div>

                    <div class="group relative">
                        <div
                            class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                        >
                            <img
                                src="coffee/mocha.jpg"
                                alt="Hand stitched, orange leather long wallet."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Mocha
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Natural</p>
                        <p class="mt-1 text-sm font-medium text-gray-900">
                            $75
                        </p>
                    </div>

                    <div class="group relative">
                        <div
                            class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                        >
                            <img
                                src="coffee/machiato.jpg"
                                alt="Hand stitched, orange leather long wallet."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Machiato
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Natural</p>
                        <p class="mt-1 text-sm font-medium text-gray-900">
                            $75
                        </p>
                    </div>
                </div>

                <div class="mt-8 text-sm md:hidden">
                    <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        >Browse all<span aria-hidden="true"> &rarr;</span></a
                    >
                </div>
            </div>
        </section>
    </div>

    <footer aria-labelledby="footer-heading" class="bg-grascale-y-50 mt-8">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="border-t border-gray-100 py-10 text-center">
                <p class="text-sm text-gray-500">
                    &copy; 2021 Workflow, Inc. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
