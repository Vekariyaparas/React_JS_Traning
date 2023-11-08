import React from 'react'

export default function Form() {
    return (
        <>
            <div className='container mx-auto'>
                <form className='w-50 mx-auto mt-5 border p-4'>
                    <fieldset className=''>
                        <legend className='mb-3 text-center'>Contact Form</legend>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-2" id="basic-addon1"><i className='bi bi-person'></i></span>
                            <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-2" id="basic-addon1"><i className='bi bi-person'></i></span>
                            <input type="text" class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-2" id="basic-addon1"><i className='bi bi-envelope'></i></span>
                            <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text p-2" id="basic-addon1"><i className='bi bi-telephone'></i></span>
                            <input type="text" class="form-control" placeholder="Contact Number" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
