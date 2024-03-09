import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import arrow from "../../assets/images/arrow.svg";
import axios from "axios";

const Wrap = styled.div`
    width: 100%;max-width: ${c.width};margin: 0 auto;box-sizing:border-box;padding:40px 20px;display: flex;flex-direction: column;row-gap: 30px;
  & .content-section {
    display: flex;align-items: center;justify-content: space-between;column-gap:20px;
    & .left {
      flex:1 1 0%;
      & .heading {
        font-size: 32px;line-height:42px;font-weight: 600;color: ${colors.black};margin:0 0 10px;
      }
      & .desc {
        color: ${colors.lightBlack};max-width:1000px;
        & p{
          margin:0;
        }
      }
    }
    & .right {
    text-transform: uppercase;display: flex;align-items: center;

    & .link-2 {
      background: ${colors.black};color: ${colors.white};padding: 10px 20px;border-radius: 8px;font-weight: 500;font-size: 12px;display:flex;gap:6px;box-shadow: 5px 10px 15px #2E2E2E33;
      & .arrow {
        width: 14px;height:10px;
      }
    }
  }
  }

  & .work-section {
    display: flex;flex-wrap: wrap;gap:30px;
    & .work-card{
        width:calc(25% - 22.5px);
        & .img{
            border-radius: 25px;overflow: hidden;box-shadow: #00000029 0px 0px 3px;position: relative;height: 230px;
            & .image {
                position: absolute;height: 100%;width: 100%;inset: 0px;object-fit: cover;
            }
        }
    }
    .title {
        font-size: 14px;margin:15px 0 0;font-weight: 600;
    }
  }

  @media (max-width:991px){
    & .content-section {
        & .left {
            & .heading {
                font-size: 30px;line-height:40px;
            }
        };
    }
    & .work-section{
        gap:20px;
      & .work-card{
        width:calc(33.3% - 13.1px);
      }
    }
  }

  @media (max-width:767px){
    & .content-section {
            flex-direction:column;row-gap:15px;align-items: flex-start;
            & .left {
                & .heading {
                    font-size: 24px;line-height:34px;
                }
                & .desc {
                    font-size:14px;
                }
            };
        }
    & .work-section{
        & .work-card{
            width: calc(50% - 10px);
        }
    }
  };
  @media (max-width:479px){
    & .content-section {
            & .left {
                & .heading {
                    font-size: 18px;line-height:28px;margin:0;
                }
            };
        }
    & .work-section{
        & .work-card{
            width: 100%;
        }
    }
  }
`;

const OurWork = () => {

    const [work, setWork] = useState({});

    useEffect(()=>{
        getData();
    },[])

    const getData = () => {
        return axios.get(c.BASE_URL)
          .then((res) => {
            if (res.status === 200) {
                const worksData = res.data.works;
                setWork(worksData);
            } else {
              console.error('Error:', res.statusText);
            }
          })
          .catch((error) => {
            console.error('Network Error:', error);
          });
      }
  return (
    <Wrap>
      <div className="content-section">
        <div className="left">
          <div className="heading">{work.heading}</div>
          <div className="desc" dangerouslySetInnerHTML={{__html:work.description}}/>
        </div>
        <div className="right">
          <a className="link-2" href={work.buttonLink}>
            {work.buttonText}  
            <span>
              <img className="arrow" src={arrow} alt="" />
            </span>
          </a>
        </div>
      </div>
      <div className="work-section">
        {Array.isArray(work.data) && work.data.map((works) => (
            <div key={works.id} className="work-card">
              <div className="img">
                <img className="image" src={works.thumbnail} alt="" />
              </div>
              <div className="title">{works.name}</div>
            </div>
        ))}
      </div>
    </Wrap>
  );
};

export default OurWork;




// import React, { useState } from "react";
// import styled from "styled-components";
// import color from "../../constants/Color";
// import c from "../../constants/Common";
// import { arrowIcon } from "@/helpers/Icons";
// import Image from "next/image";
// import { getThumbnail } from "@/helpers/GlobalHelpers";

// const Wrapper = styled.div`
//   /* Your existing styles */
// `;

// const OurWork = ({ works }) => {
//   const [imagesLoaded, setImagesLoaded] = useState(0);

//   const handleImageLoad = () => {
//     setImagesLoaded(imagesLoaded + 1);
//   };

//   if (!works) {
//     return;
//   }

//   return (
//     <Wrapper>
//       <div className="content-section">
//         {/* Your content */}
//       </div>
//       <div
//         style={{
//           visibility: imagesLoaded === works.data.length ? "visible" : "hidden"
//         }}
//       >
//         <div className="work-section">
//           {works.data.map((work) => (
//             <div key={work.id} className="work-card">
//               <div className="img">
//                 {work.thumbnail && (
//                   <Image
//                     className="image"
//                     layout="fill"
//                     loading="lazy"
//                     unoptimized
//                     src={getThumbnail(work.thumbnail)}
//                     alt={work.name}
//                     onLoad={handleImageLoad}
//                   />
//                 )}
//               </div>
//               {work.name && <div className="title">{work.name}</div>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default OurWork;





// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import color from "../../constants/Color";
// import c from "../../constants/Common";
// import { arrowIcon } from "@/helpers/Icons";
// import Image from "next/image";
// import { getThumbnail } from "@/helpers/GlobalHelpers";

// const Wrapper = styled.div`
//   /* Your existing styles */
// `;

// const OurWork = ({ works }) => {
//   const [isLoading, setIsLoading] = useState(true); 
//   const [imageVisible, setImageVisible] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false); 
//     }, 2000); 
//   }, []);

//   const handleImageLoad = () => {
//     setImageVisible(true);
//   };

//   if (!works) {
//     return;
//   }

//   return (
//     <Wrapper>
//       <div className="content-section">
//         {/* Your content */}
//       </div>
//       {isLoading ? (
//         // Show a loading text while images are loading
//         <p>Loading...</p>
//       ) : (
//         <div className="work-section">
//           {works.data.map((work) => (
//             <div key={work.id} className="work-card">
//               <div className="img">
//                 {work.thumbnail && (
//                   <Image
//                     className="image"
//                     layout="fill"
//                     loading="lazy"
//                     unoptimized
//                     src={getThumbnail(work.thumbnail)}
//                     alt={work.name}
//                     onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
//                   />
//                 )}
//               </div>
//               {work.name && <div className="title">{work.name}</div>}
//             </div>
//           ))}
//         </div>
//       )}
//     </Wrapper>
//   );
// };

// export default OurWork;
