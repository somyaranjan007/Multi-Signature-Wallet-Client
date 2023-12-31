import React, { useState, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeleteIcon from '@mui/icons-material/Delete';


const CreateInputSection = ({ state, setState }) => {
    const [maxVotingPeriod, setMaxVotingPeriod] = useState('');

    console.log(state)
    
    const handleInputChange = (index, field, value) => {
        console.log(index, field, value);
        const newData = [...state.owners];
        newData[index] = {
            ...newData[index],
            [field]: value
        };
        setState(prev => ({ ...prev, owners: newData }))
       
    };

    console.log(state)


    const handleDeleteInput = (index) => {
        console.log("Deleting index:", index);

        const newInputTags = state.owners.filter((_, i) => i !== index);
        setState(prev => ({ ...prev, owners: newInputTags }))
    };

    const handleThresholdAndVote = (event) => {
        const {name, value} = event.target;
        setState(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>

            {
                state.owners.map((item, index) => {
                    return (
                        <div className='flex my-3 px-3 py-1 items-center' key={index}  >
                            <div className='border flex justify-start items-center rounded'>
                                <div className='border py-3 px-3 bg-gray-950 rounded'>
                                    <PersonIcon className='text-white bg-transparent' />
                                </div>
                                <input type="text" name='name' value={state.owners[index]?.name ?? ""} onChange={(e) => { handleInputChange(index, "name", e.target.value) }} className='px-2 py-3 outline-none' placeholder='Owner Name' />
                            </div>
                            <div className='border flex justify-start items-center rounded ml-5'>
                                <div className='border py-3 px-3 bg-gray-950 rounded'>
                                    <ContactsIcon className='text-white bg-transparent' />
                                </div>
                                <input type="text" name='address' value={state.owners[index]?.address ?? ""} onChange={(e) => { handleInputChange(index, "address", e.target.value) }} className='px-2 py-3 outline-none' placeholder='Owner Address'/>
                            </div>
                            <div className='border flex justify-start items-center rounded ml-5'>
                                <div className='border py-3 px-3 bg-gray-950 rounded'>
                                    <ContactsIcon className='text-white bg-transparent' />
                                </div>
                                <input type="number" name='weight' value={state.owners[index]?.weight ?? ""} 
                                onChange={(e) => { 
                                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                                    handleInputChange(index, "weight", numericValue)
                                 }}
                                     className='px-2 py-3 outline-none' placeholder='Owner Weight'/>
                            </div>
                            {index > 0 && <DeleteIcon className='text-gray-400 ml-2' onClick={() => handleDeleteInput(index)} />}
                        </div>
                    );
                })
            }

            <button onClick={() => handleInputChange(state.owners.length, "name", "")} className='flex justify-start items-center hover:bg-gray-100 my-3 px-2 py-3 mx-3 border rounded'>
                <AddIcon className='mr-2' /> <span>Add new owner</span>
            </button>

            <div className='border-t px-3 py-5 space-y-4'>
                <h3 className='font-semibold text-xl'>Threshold</h3>
                <p className='text-sm'>Any transaction requires the confirmation of:</p>

                <input type="number" placeholder='Enter the threshold' name='threshold' value={state?.threshold ?? ""} onChange={(e) => handleThresholdAndVote(e)} className='p-2 m-2 border outline-none' />
                <span className='ml-2'>Out of {state.owners.reduce((sum, curr) => {
                    if (curr.weight ?? false) {
                        return sum += Number(curr?.weight)
                    }
                    return sum
                }, 0)} weight. </span>
            
            </div>

            <div className="border-t px-3 py-5 space-y-4 mb-8">
                <h3 className='font-semibold text-xl'>Maximum Voting Period</h3>
                <p className='text-sm font-normal'>Any transaction requires the confirmation of:</p>
                <input type="number" placeholder='Enter max voting period' className='p-2 m-2 border outline-none' value={state?.maxVotingPeriod ?? ""}
                    name='maxVotingPeriod' onChange={(e) => handleThresholdAndVote(e)}  /> <span className='ml-2'>In Days.</span>
            </div>
            
        </div>
    )
}

export default CreateInputSection