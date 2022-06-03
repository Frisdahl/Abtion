import { Link } from 'react-router-dom'

const UploadResume = () => {
    return (
        <div className="apply-container">
            <div className="row1-container">
                <div className="upload-container">
                    <h2>Apply for a position</h2>
                    <div className="dropdown-container">
                        <p>Choose position</p>
                        <select name="selectList" id="selectList">
                            <option value="option 1">
                                Wordpress developer
                            </option>
                             {' '}
                            <option value="option 2">
                                Javascript developer
                            </option>
                        </select>
                    </div>

                    <div className="resume-container">
                        <p>Upload your resume</p>
                        <form action="/action_page.php">
                            <label htmlFor="inputTag">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="76.462"
                                    viewBox="0 0 50 76.462"
                                    id="icon-file"
                                >
                                    <path
                                        id="Icon_awesome-file-alt"
                                        data-name="Icon awesome-file-alt"
                                        d="M29.167,20.31V0H3.125A3.37,3.37,0,0,0,0,3.584V72.878a3.37,3.37,0,0,0,3.125,3.584h43.75A3.37,3.37,0,0,0,50,72.878V23.894H32.292A3.388,3.388,0,0,1,29.167,20.31ZM37.5,55.554a1.694,1.694,0,0,1-1.562,1.792H14.063A1.694,1.694,0,0,1,12.5,55.554V54.36a1.694,1.694,0,0,1,1.563-1.792H35.937A1.694,1.694,0,0,1,37.5,54.36ZM37.5,46a1.694,1.694,0,0,1-1.562,1.792H14.063A1.694,1.694,0,0,1,12.5,46V44.8a1.694,1.694,0,0,1,1.563-1.792H35.937A1.694,1.694,0,0,1,37.5,44.8Zm0-10.752v1.195a1.694,1.694,0,0,1-1.562,1.792H14.063A1.694,1.694,0,0,1,12.5,36.439V35.244a1.694,1.694,0,0,1,1.563-1.792H35.937A1.694,1.694,0,0,1,37.5,35.244ZM50,18.2v.911H33.333V0h.794a2.933,2.933,0,0,1,2.214,1.045L49.089,15.681A3.856,3.856,0,0,1,50,18.2Z"
                                    />
                                </svg>
                                Choose and upload
                                <input
                                    type="file"
                                    id="inputTag"
                                    name="filename"
                                    placeholder="choose file"
                                />
                            </label>
                        </form>
                    </div>

                    <div className="other-container">
                        <p>Other documents</p>
                        <form action="/action_page.php">
                            <label htmlFor="inputTag">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="76.462"
                                    viewBox="0 0 50 76.462"
                                    id="icon-file"
                                >
                                    <path
                                        id="Icon_awesome-file-alt"
                                        data-name="Icon awesome-file-alt"
                                        d="M29.167,20.31V0H3.125A3.37,3.37,0,0,0,0,3.584V72.878a3.37,3.37,0,0,0,3.125,3.584h43.75A3.37,3.37,0,0,0,50,72.878V23.894H32.292A3.388,3.388,0,0,1,29.167,20.31ZM37.5,55.554a1.694,1.694,0,0,1-1.562,1.792H14.063A1.694,1.694,0,0,1,12.5,55.554V54.36a1.694,1.694,0,0,1,1.563-1.792H35.937A1.694,1.694,0,0,1,37.5,54.36ZM37.5,46a1.694,1.694,0,0,1-1.562,1.792H14.063A1.694,1.694,0,0,1,12.5,46V44.8a1.694,1.694,0,0,1,1.563-1.792H35.937A1.694,1.694,0,0,1,37.5,44.8Zm0-10.752v1.195a1.694,1.694,0,0,1-1.562,1.792H14.063A1.694,1.694,0,0,1,12.5,36.439V35.244a1.694,1.694,0,0,1,1.563-1.792H35.937A1.694,1.694,0,0,1,37.5,35.244ZM50,18.2v.911H33.333V0h.794a2.933,2.933,0,0,1,2.214,1.045L49.089,15.681A3.856,3.856,0,0,1,50,18.2Z"
                                    />
                                </svg>
                                Choose and upload
                                <input
                                    type="file"
                                    id="inputTag"
                                    name="filename"
                                    placeholder="choose file"
                                />
                            </label>
                        </form>
                    </div>
                    <input className="input-submit" type="submit"></input>
                </div>

                <div className="status-container">
                    <h4>Where is my application?</h4>
                    <p>Go check out your application below!</p>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to="/statusApplication"
                    >
                        <button>Status on application</button>
                    </Link>
                    <div className="information">
                        <h5>Need additional information?</h5>
                        <p>
                            If you have any questions, we are happy to answer.
                            iwanttowork@abtion.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadResume
