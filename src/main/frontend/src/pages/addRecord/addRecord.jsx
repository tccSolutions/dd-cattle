import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { addRecord, getHorses, getMedicalRecordById, updateRecord } from "../../api/ApiService";


export default function RecordForm() {

    const initialValues = {
        date: "",
        horse: { id: "" },
        blackTape: "",
        redTape: "",
        girth: "",
        length: "",
        veterinarian: "",
        wasWormed: "",
        cogginsPulled: "",
        rabiesShot: "",
        wasVaccinated: "",
        notes: "",
        description: "",
        height: "",
        id: ""
    }
    const [horses, setHorses] = useState(null);
    const [submitErrors, setErrors] = useState()
    const nav = useNavigate();

    const onSubmit = (values) => {
        console.log(values)
        addRecord(values)
            .then(res => { nav(`/records/${values.horse.id}`) })
            .catch(err => setErrors(err))

    }

    function validate(values) {
        let errors = {}        
        if (values.horse.id === "") {
            errors.horse = "Please Select A Horse"
        }
        if (values.date.length < 1) {
            errors.date = "Date Field Required"
        }
        if (values.description.length < 5) {
            errors.description = "Description must be at least 5 characters"
        }
        return errors
    }

    useEffect(() => {
        getHorses()
            .then(res => { setHorses(res.data) })
            .catch(err => console.log(err))
            .finally()

    }, [])

    return (

        <div className="container">
            {submitErrors && <h6 className='alert alert-danger'>{submitErrors.message}</h6>}
            {horses &&
                <div className="container mt-5">

                    <Formik className='' initialValues={initialValues} enableReinitialize='true' onSubmit={onSubmit} validate={validate}>

                        {
                            (prop) => (
                                <Form className=' text-start col-lg-6 container border border-2 p-3  shadow rounded  mx-auto '>


                                    <div className='row'>
                                        <div className='col-12'>
                                            <ErrorMessage name="horse" component="p" className="text-danger" />
                                            <Field as="select" className="form-control" placeholder="select horse" name="horse.id">
                                                <option selected>Select a Horse</option>
                                                {horses.map(horse => (
                                                    <option key={horse.id} value={horse.id}>{horse.name}</option>
                                                ))}
                                            </Field>
                                        </div>
                                        <div className='col-lg-6 mb-3'>
                                            <label>Date</label>
                                            <Field type='date' className='form-control' name='date' />
                                            <ErrorMessage name="date" component="p" className="text-danger" />
                                        </div>
                                        <div className='col-lg-6 mb-3'>
                                            <label>Description</label>
                                            <Field type='text' className='form-control' name='description' />
                                            <ErrorMessage name="description" component="p" className="text-danger" />
                                        </div>
                                        <div className='col-lg-3 mb-3'>
                                            <Field type='checkbox' className='form-check-input me-1' name='wasWormed' />
                                            <label className="form-check-label">Wormed</label>
                                        </div>
                                        <div className='col-lg-3 mb-3'>
                                            <Field type='checkbox' className='form-check-input me-1' name='wasVaccinated' />
                                            <label className="form-check-label">Vaccinated</label>
                                        </div>
                                        <div className='col-lg-3 mb-3'>
                                            <Field type='checkbox' className='form-check-input me-1' name='cogginsPulled' />
                                            <label className="form-check-label">Coggins Pulled</label>
                                        </div>
                                        <div className='col-lg-3 mb-3'>
                                            <Field type='checkbox' className='form-check-input me-1' name='rabiesShot' />
                                            <label className="form-check-label">Rabies Shot</label>
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <label>Black Tape</label>
                                            <Field type="text" className="form-control" name="blackTape" />
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <label>Red Tape</label>
                                            <Field type="text" className="form-control" name="redTape" />
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <label>Girth</label>
                                            <Field type="text" className="form-control" name="girth" />
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <label>Length</label>
                                            <Field type="text" className="form-control" name="length" />
                                        </div>
                                        <div className="mb-3 col-lg-12">
                                            <label>Veterinarian</label>
                                            <Field type="text" className="form-control" name="veterinarian" />
                                        </div>
                                        <div className='col-lg-12 mb-3'>
                                            <label>Notes</label>
                                            <Field as='textarea' className='form-control ' name='notes' />
                                        </div>
                                        <div className=' col-lg-6 my-5'>
                                            <button className='btn btn-success w-100' type='submit'>Save</button>
                                        </div>
                                        <div className=' col-lg-6 my-5'>
                                            <Link className='btn btn-danger w-100' to={`/records`}>Cancel</Link>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            }



        </div>
    )
}