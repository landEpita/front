import React from 'react';
import History from './Context';

const Position = () => {

    const contextHist = React.useContext(History)

    return (
        <div className="position">
            Historique
            <div className="list-img">
                {contextHist.hist.map(
                    (e,i) => {
                        if (contextHist.hist.length - i < 5){       
                            return (
                                <img src= {e.img} className={e.label === "In Distribution" ? "img-ok": null}/>
                            )
                        }
                    }
                )}
            </div>
        </div>
    );
};

export default Position;