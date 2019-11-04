import React, { Component } from 'react'
import { Link } from "react-router-dom";

class search extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="intro-wrapper bgimage overlay overlay--dark">
                    <div className="bg_image_holder" style={{ backgroundColor: '#414f9e' }} />
                    <div className="mainmenu-wrapper">
                    </div>{/* ends: .mainmenu-wrapper */}
                    <div className="directory_content_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="search_title_area">
                                        <h2 className="title">Trouver votre film / chansons</h2>
                                        <p className="sub_title">Rechercher des films, des albums ou chansons particulières...</p>
                                    </div>{/* ends: .search_title_area */}
                                    <form action="all-listings-list.html" className="search_form">
                                        <div className="atbd_seach_fields_wrapper">
                                            <div className="single_search_field search_query">
                                                <input className="form-control search_fields" type="text" placeholder="What are you looking for?" />
                                            </div>
                                            <div className="single_search_field search_category">
                                                <select className="search_fields" id="at_biz_dir-category">
                                                    <option value>Select a category</option>
                                                    <option value="automobile">Automobile</option>
                                                    <option value="education">Education</option>
                                                    <option value="event">Event</option>
                                                </select>
                                            </div>
                                            <div className="single_search_field search_location">
                                                <select className="search_fields" id="at_biz_dir-location">
                                                    <option value>Select a location</option>
                                                    <option value="ab">AB Simple</option>
                                                    <option value="australia">Australia</option>
                                                    <option value="australia-australia">Australia</option>
                                                </select>
                                            </div>
                                            <div className="atbd_submit_btn">
                                                <Link to="/result" type="submit" className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search">Search</Link>
                                            </div>
                                        </div>
                                    </form>{/* ends: .search_form */}
                                    <div className="directory_home_category_area">
                                        <ul className="categories">
                                            <li>
                                                <a href="#" style={{ cursor: 'default' }}>
                                                    <span className="color-primary"><i className="la la-file-movie-o" /></span>
                                                    Films
                </a>
                                            </li>
                                            <li>
                                                <a href="#" style={{ cursor: 'default' }}>
                                                    <span className="color-success"><i className="la la-music" /></span>
                                                    Chansons
                </a>
                                            </li>
                                            <li>
                                                <a href="#" style={{ cursor: 'default' }}>
                                                    <span className="color-warning"><i className="la la-list" /></span>
                                                    Albums
                </a>
                                            </li>
                                        </ul>
                                    </div>{/* ends: .directory_home_category_area */}
                                </div>{/* ends: .col-lg-10 */}
                            </div>
                        </div>
                    </div>{/* ends: .directory_search_area */}
                </section>{/* ends: .intro-wrapper */}

            </React.Fragment>
        )
    }
}

export default search;