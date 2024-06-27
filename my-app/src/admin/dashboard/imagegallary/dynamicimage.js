import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './dimage.css';
import ResponsiveDrawer from '../drawer';

export default function Image_RCA() {
    const [events, setEvents] = useState([]);
    const [editingEventId, setEditingEventId] = useState(null);

    const [formData, setFormData] = useState({
        image: null, // New state for storing image
    });

    useEffect(() => {
        // Fetch events from backend upon component mount
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backendroyal.nepalmodelsecondaryschool.com/Imagegallary');
            setEvents(response.data.reverse());
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleInputChange = (e) => {
        if (e.target.name.startsWith('image')) {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] }); // Use e.target.files[0] to get the first selected file
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithImage = new FormData();
            formDataWithImage.append('image', formData.image);
            const response = await axios.post('https://backendroyal.nepalmodelsecondaryschool.com/Imagegallary', formDataWithImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setEvents([...events, response.data]);
            // Clear form data after successful submission
            setFormData({ image: null });
            toast.success('Data change success');
        } catch (error) {
            console.error('Error creating event:', error);
            toast.error('Failed to create event');
        }
    };

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`https://backendroyal.nepalmodelsecondaryschool.com/Imagegallary/${eventId}`); // Corrected URL
            setEvents(events.filter(event => event._id !== eventId));
            toast.success('Successfully deleted the event');
        } catch (error) {
            console.error('Error deleting event:', error);
            toast.error('Failed to delete the event');
        }
    };

    return (
        <div className='dashboard-event_change'>
            <h2 className='admin-dashboard'>For Image Gallary</h2>
            <form onSubmit={handleSubmit} className='form-submitter'>
                <input type="file" name="image" onChange={handleInputChange} accept="image/*" />
                <button type="submit">Save Changes</button>
            </form>
            <div className="image-grid-container">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div className="image-grid" key={index}>
                          <img src={`https://backendroyal.nepalmodelsecondaryschool.com/${event.imageUrl}`} alt="Event" />

                            <button onClick={() => handleDelete(event._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </div>
            <ResponsiveDrawer />
          
        </div>
    );
};
