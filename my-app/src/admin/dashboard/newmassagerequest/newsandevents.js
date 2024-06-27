import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './newsandevents.css';
import ResponsiveDrawer from '../drawer';

const AdminDashboard = () => {
    const [title, setTitle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [editEventId, setEditEventId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editParagraph, setEditParagraph] = useState('');
    const [editImageFile, setEditImageFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('title1', title);
        formData.append('paragraph', paragraph);

        try {
            const response = await axios.post('https://backendroyal.nepalmodelsecondaryschool.com/events_change', formData);
            setTitle('');
            setParagraph('');
            setImageFile(null);
            setSuccessMessage('Event added successfully');
            fetchEvents();
        } catch (error) {
            setErrorMessage('Error uploading event');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData();
        formData.append('image', editImageFile);
        formData.append('title1', editTitle);
        formData.append('paragraph', editParagraph);

        try {
            const response = await axios.put(`https://backendroyal.nepalmodelsecondaryschool.com/events_change/${editEventId}`, formData);
            setEditEventId(null);
            setEditTitle('');
            setEditParagraph('');
            setEditImageFile(null);
            setSuccessMessage('Event updated successfully');
            fetchEvents();
        } catch (error) {
            setErrorMessage('Error updating event');
        }
    };

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backendroyal.nepalmodelsecondaryschool.com/events_change');
            setEvents(response.data.reverse());
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleEditImageChange = (e) => {
        setEditImageFile(e.target.files[0]);
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`https://backendroyal.nepalmodelsecondaryschool.com/events_change/${eventId}`);
            setEvents(events.filter((event) => event._id !== eventId));
            setSuccessMessage('Event deleted successfully');
        } catch (error) {
            console.error('Error deleting event:', error);
            setErrorMessage('Failed to delete event');
        }
    };

    const handleEditClick = (event) => {
        setEditEventId(event._id);
        setEditTitle(event.title1);
        setEditParagraph(event.paragraph);
    };

    return (
        <>
            <div className="admin-dashboard">
                <h2>Add News and Events</h2>
                <form className="event-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        value={paragraph}
                        onChange={(e) => setParagraph(e.target.value)}
                        placeholder="Paragraph"
                    />
                    <input type="file" onChange={handleImageChange} />
                    <button type="submit">Add Event</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                
                {editEventId && (
                    <form className="event-form" onSubmit={handleUpdate}>
                        <h2>Edit Event</h2>
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            placeholder="Title"
                        />
                        <textarea
                            value={editParagraph}
                            onChange={(e) => setEditParagraph(e.target.value)}
                            placeholder="Paragraph"
                        />
                        <input type="file" onChange={handleEditImageChange} />
                        <button type="submit">Update Event</button>
                    </form>
                )}

                <h2>Events</h2>
                <ul className="event-list">
                    {events.map((event) => (
                        <li className="event-item" key={event._id}>
                            <h3>{event.title1}</h3>
                            <p>{event.paragraph}</p>
                            <img src={`https://backendroyal.nepalmodelsecondaryschool.com/${event.url}`} alt={event.title1} />
                            <button onClick={() => handleEditClick(event)}>Edit</button>
                            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <ResponsiveDrawer />
        </>
    );
};

export default AdminDashboard;
