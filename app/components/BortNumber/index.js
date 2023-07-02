

const BortNumber =({number}) =>{

    return (
        <div className="bort_number_container">
            <div className="bort_number_blue">
                <div className="bort_number_flag_container">
                   <div className="bort_number_flag_blue">
                   </div>
                   <div className="bort_number_flag_yellow">
                   </div>
                </div>
                <div className="bort_number_blue_text">
                    UA
                </div>
            </div>
            <div className="bort_number_number">
            {number}
            </div>
        </div>
    )

}

export default BortNumber;