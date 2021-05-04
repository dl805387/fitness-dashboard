import React, { useState, useEffect } from "react";
const axios = require('axios').default;

function Goals(props) {

    const {
        userID,
        wtGoal,
        setWtGoal,
        cardioGoal,
        setCardioGoal,
        calGoal,
        setCalGoal,
        proteinGoal,
        setProteinGoal
    } = props;

    // These states tells if the user has clicked on set goal button to edit
    const [editWt, setEditWt] = useState(false);
    const [editCardio, setEditCardio] = useState(false);
    const [editCal, setEditCal] = useState(false);
    const [editProtein, setEditProtein] = useState(false);

    const updateWtGoal = () => {
        axios.put('http://localhost:3001/updateWtGoal', {
            userID: userID,
            wtGoal: wtGoal,
        }).then(() => {
            console.log("success");
            toggleEditWt()
        });
    }

    const updateCardioGoal = () => {
        axios.put('http://localhost:3001/updatecardioGoal', {
            userID: userID,
            cardioGoal: cardioGoal,
        }).then(() => {
            console.log("success");
            toggleEditCardio()
        });
    }

    const updateCalGoal = () => {
        axios.put('http://localhost:3001/updateCalGoal', {
            userID: userID,
            calGoal: calGoal,
        }).then(() => {
            console.log("success");
            toggleEditCal()
        });
    }

    const updateProteinGoal = () => {
        axios.put('http://localhost:3001/updateProteinGoal', {
            userID: userID,
            proteinGoal: proteinGoal,
        }).then(() => {
            console.log("success");
            toggleEditProtein()
        });
    }

    // toggles the edit button
    const toggleEditWt = () => {
        if (editWt) {
            setEditWt(false);
        } else {
            setEditWt(true);
        }
    }

    const toggleEditCardio = () => {
        if (editCardio) {
            setEditCardio(false);
        } else {
            setEditCardio(true);
        }
    }

    const toggleEditCal = () => {
        if (editCal) {
            setEditCal(false);
        } else {
            setEditCal(true);
        }
    }

    const toggleEditProtein = () => {
        if (editProtein) {
            setEditProtein(false);
        } else {
            setEditProtein(true);
        }
    }


    return (
        <div>
            <div>
                <p>Weight Training</p>
                <p>logo</p>
                
                {editWt ? (
                    <div>
                        <textarea onChange={e => {setWtGoal(e.target.value)}}></textarea>
                        <button onClick={e => {e.preventDefault(); updateWtGoal();}}>Update</button>
                    </div>
                ) : (
                    <div>
                        <textarea defaultValue={wtGoal} readOnly></textarea> 
                        <button onClick={e => {e.preventDefault(); toggleEditWt()}}>Set Goal</button>
                    </div>
                )}
            </div>

            <div>
                <p>Cardio</p>
                <p>logo</p>
                
                {editCardio ? (
                    <div>
                        <textarea onChange={e => {setCardioGoal(e.target.value)}}></textarea>
                        <button onClick={e => {e.preventDefault(); updateCardioGoal();}}>Update</button>
                    </div>
                ) : (
                    <div>
                        <textarea defaultValue={cardioGoal} readOnly></textarea> 
                        <button onClick={e => {e.preventDefault(); toggleEditCardio()}}>Set Goal</button>
                    </div>
                )}
            </div>

            <div>
                <p>Calories</p>
                <p>logo</p>
                
                {editCal ? (
                    <div>
                        <textarea onChange={e => {setCalGoal(e.target.value)}}></textarea>
                        <button onClick={e => {e.preventDefault(); updateCalGoal();}}>Update</button>
                    </div>
                ) : (
                    <div>
                        <textarea defaultValue={calGoal} readOnly></textarea> 
                        <button onClick={e => {e.preventDefault(); toggleEditCal()}}>Set Goal</button>
                    </div>
                )}
            </div>

            <div>
                <p>Protein</p>
                <p>logo</p>
                
                {editProtein ? (
                    <div>
                        <textarea onChange={e => {setProteinGoal(e.target.value)}}></textarea>
                        <button onClick={e => {e.preventDefault(); updateProteinGoal();}}>Update</button>
                    </div>
                ) : (
                    <div>
                        <textarea defaultValue={proteinGoal} readOnly></textarea> 
                        <button onClick={e => {e.preventDefault(); toggleEditProtein()}}>Set Goal</button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Goals;