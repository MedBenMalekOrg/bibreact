import React, { Component } from 'react'
import { Link } from "react-router-dom";

class search extends Component {
    state = {
        media: '',
        filter: '',
        search: ''
    }

    onSubmit = e => {
        e.preventDefault();

        const { media, filter, search } = this.state;

        this.props.history.push("/profile/" + media + "/" + filter + "/" + search);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onChangeFilter = e => this.setState({ filter: e.target.value });
    onChangeMedia = e => this.setState({ media: e.target.value });

    render() {
        const { media, filter, search } = this.state;
        return (
            <React.Fragment>
                <section className="intro-wrapper" style={{ backgroundColor: '#272b41' }}>
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
                                                <input className="form-control search_fields" type="text" placeholder="Que cherchez-vous?" onChange={this.onChange} name="search" value={search} />
                                            </div>
                                            <div className="single_search_field">
                                                <select className="form-control" onChange={this.onChangeMedia}>
                                                    <option value="">Sélectionnez le média</option>
                                                    <option value="film">Film</option>
                                                    <option value="musique">Musique</option>
                                                    <option value="album">Album</option>
                                                </select>
                                            </div>
                                            <div className="single_search_field" onChange={this.onChangeFilter}>
                                                <select className="form-control">
                                                    <option value="">Filtrer</option>
                                                    <option value="genre">Genre</option>
                                                    <option value="persone">Persone</option>
                                                    <option value="titre">Titre</option>
                                                </select>
                                            </div>
                                            <div className="atbd_submit_btn">
                                                {media !== "" && filter !== "" && search !== "" ? <Link to={"/result/" + media + "/" + filter + "/" + search} className="btn btn-dark btn-md btn-icon btn-icon">chercher</Link> : <Link to="/" className="btn btn-md btn-icon btn-icon" style={{ backgroundColor: '#9e0518', color: 'white', cursor: 'no-drop' }}>Remplire</Link>}


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