import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { addRecord, getHorses, getMedicalRecordById, updateRecord } from "../../api/ApiService";


export default function RecordForm() {
    const { id } = useParams();
    const [record, setRecord] = useState(null);
    const [horses, setHorses] = useState(null);
    const nav = useNavigate();

    const onSubmit = (values) => {
        if (record) {   
            console.log(values)        
            updateRecord(record.id, values)
                .then(res => nav(`/records/${record.horse.id}`))
                .catch(err => console.log(err))
        }       
    }

    useEffect(() => {
        if (id) {
            getMedicalRecordById(id)
                .then(res => setRecord(res.data))
        } 
        

    }, [])

    return (

        <div className="container">

            <div className="container mt-5">
                <Formik className='' initialValues={record} enableReinitialize='true' onSubmit={onSubmit}>
                    {
                        (prop) => (
                            <Form className=' text-start col-lg-6 container border border-2 p-3  shadow rounded  mx-auto '>
                                {record && <h3>Update Record - {record.horse.name}</h3>}

                                <div className='row'>                                   
                                    <div className='col-lg-6 mb-3'>
                                        <label>Date</label>
                                        <Field type='date' className='form-control' name='date' />
                                    </div>
                                    <div className='col-lg-6 mb-3'>
                                        <label>Type</label>
                                        <Field type='text' className='form-control' name='description' />
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



        </div>
    )
}