import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

class result extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <section className="header-breadcrumb" style={{ backgroundColor: '#272b41' }}>
                        <div className="mainmenu-wrapper">
                        </div>
                        {/* ends: .mainmenu-wrapper */}
                        <div className="breadcrumb-wrapper content_above">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="page-title">Votre résultat de recherche</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Résultat</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ends: .breadcrumb-wrapper */}
                    </section>
                    <section className="all-listing-wrapper section-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="atbd_generic_header">
                                        <div className="atbd_generic_header_title">
                                            <h4>Tous les résultats</h4>
                                            <p>Nombre total des résultats trouvées: 1</p>
                                        </div>
                                        {/* ends: .atbd_generic_header_title */}
                                    </div>
                                    {/* ends: .atbd_generic_header */}
                                </div>
                                {/* ends: .col-lg-12 */}
                                <div className="col-lg-12 listing-items">
                                    <div className="row">
                                        <div className="col-lg-12 order-0 order-lg-1">
                                            <div className="row">
                                                <div className="col-lg-12 ">
                                                    <div className="atbd_single_listing atbd_listing_list ">
                                                        <article className="atbd_single_listing_wrapper ">
                                                            {/* ends: .atbd_listing_thumbnail_area */}
                                                            <div className="atbd_listing_info ">
                                                                <div className="atbd_content_upper ">
                                                                    <h4 className="atbd_listing_title ">
                                                                        What's My Name?
                                                                    </h4>
                                                                    <div className="atbd_listing_meta ">
                                                                        <span className="atbd_meta atbd_listing_rating ">Music<i className="la la-music " /></span>

                                                                        <span className="atbd_meta atbd_badge_close ">Pop</span>
                                                                    </div>
                                                                    {/* End atbd listing meta */}
                                                                    <div className="atbd_listing_data_list ">
                                                                        <ul>
                                                                            <li>
                                                                                <p><span className="la la-user " />Robyn Rihanna | chanteuse <span className="la la-clock-o" />1988/02/ 20</p>
                                                                            </li>
                                                                            <li>
                                                                                <p><span className="la la-clock-o " />Duree: 3.51 min</p>
                                                                            </li>
                                                                            <li>
                                                                                <p><span className="la la-youtube-play" />Support: CD</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* End atbd listing meta */}
                                                                </div>
                                                                {/* end .atbd_content_upper */}
                                                            </div>
                                                            {/* ends: .atbd_listing_info */}
                                                        </article>
                                                        {/* atbd_single_listing_wrapper */}
                                                    </div>
                                                    <div className="atbd_content_module atbd_listing_details" style={{ marginTop: '-29.45px', borderTop: 'none' }}>
                                                        <div className="atbdb_content_module_contents">
                                                            <p>"What's My Name", is a song performed by China Anne McClain, Thomas Doherty and Dylan Playfair, was released as second single on June 2, 2017 by Walt Disney Records..</p>
                                                        </div>
                                                    </div>{/* ends: .atbd_content_module */}
                                                </div>
                                                {/* ends: .col-lg-12 */}
                                            </div>
                                        </div>
                                        {/* ends: .col-lg-8 */}
                                    </div>
                                </div>
                                {/* ends: .listing-items */}
                            </div>
                        </div>
                    </section>
                </div>

            </React.Fragment>
        )
    }
}

export default result;