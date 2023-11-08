import React from 'react'

export default function Header() {
    return (
        <>
            <div className='container mx-auto'>
                <nav class="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded">
                    <div class="container-fluid">

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#Home">Home</a>
                                </li>
                                <li class="nav-item ms-3">
                                    <a class="nav-link" href="#About">About</a>
                                </li>
                                <li class="nav-item ms-3">
                                    <a class="nav-link" href="#Blog">Blog</a>
                                </li>
                                <li class="nav-item ms-3">
                                    <a class="nav-link" href="#Contact">Contact</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <div class="input-group">
                                    <input type="text" class="form-control p-2" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text p-2" id="basic-addon2">Search</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
