
function Profile() {
    fetch(`https://agiletech-test-api.zeabur.app/api`)
    .then ((res) => res.json())
    .then ((res) =>{
        console.log(res)
    })

    return ( <div>profile</div> );
}

export default Profile;