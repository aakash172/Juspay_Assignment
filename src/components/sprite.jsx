import React from "react";
import { useDispatch, useSelector } from "react-redux";
import runAllEvents from "../redux/functions";
import historyMap from "../redux/functions/historyMap";
import { updateHistory } from "../redux/slice/historySlice";
import { setActiveCharacter } from "../redux/slice/spriteSlice";
import "./sprite.css";

export default function CatSprite({ characId }) {
  const dispatch = useDispatch();
  const thisSprite = useSelector((state) => state.sprite.thisSprite);
  const midAreaList = useSelector((state) => state.mid.midAreaLists);
  const activeStackId = useSelector((state) => state.mid.active);
  const activeSpriteId = useSelector((state) => state.sprite.active);

  return (
    <div
      id={characId}
      className={`character inline-block z-0 ${
        activeSpriteId === characId ? "opacity-1" : "opacity-70"
      } `}
      onClick={() => {
        dispatch(setActiveCharacter(characId));

        if (thisSprite) {
          const comps = midAreaList.find(
            (obj) => obj.id === activeStackId
          ).comps;

          runAllEvents(comps);

          comps.forEach((element) => {
            try {
              dispatch(
                updateHistory({ type: element, val1: historyMap[element].val1 })
              );
            } catch (error) {
              console.log("🚀 ~ midAreaList.forEach ~ error:", error);
            }
          });
        }
      }}
    >
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 512 270.439"
        width="100.17898101806641"
        height="100.04156036376953"
        
      >
        <path
          fill-rule="nonzero"
          d="M353.536 82.531l.667-.106c-.255-39.451 16.267-63.4 38.755-74.732 16.176-8.151 35.348-9.582 53.486-5.44 18.003 4.112 35.105 13.758 47.308 27.796 18.904 21.746 26.112 53.711 7.025 91.618a6.831 6.831 0 01-5.434 3.726c-6.069.926-12.111 1.232-18.13 1.053 2.039 2.288 3.948 4.634 5.587 7.061a6.847 6.847 0 01-1.847 9.505l-.168.11c-26.023 18.126-55.001 18.604-88.076 19.146-5.276.087-10.662.175-16.343.348-23.992.728-26.848 2.357-42.617 11.347l-1.996 1.138 55.773 78.371a6.873 6.873 0 011.258 4.017 6.827 6.827 0 01-6.881 6.774l-75.418-.867a29.098 29.098 0 01-10.039-1.185c-3.164-.949-6.248-2.456-9.249-4.488-7.612-5.155-14.989-15.476-21.609-26.674-15.573 9.554-32.561 16.159-51.035 19.381-17.863 3.115-37.106 3.06-57.796-.555-1.566 6.975-4.36 13-8.587 17.909a6.816 6.816 0 01-5.168 2.362v.022H64.805c-7.93 0-16.463-.291-24.302.118-4.593.24-7.917.414-10.895-1.245-5.642-3.145-6.312-7.751-1.397-16.565 3.861-6.925 7.952-13.784 12.423-20.511-10.585 2.427-22.172 2.396-34.59.315a6.848 6.848 0 01-1.631-13.2c11.526-4.396 18.849-12.326 23.214-23.246-17.719-11.865-7.27-38.53 13.528-38.386.725-10.35 2.086-19.808 4.374-28.017 3.07-11.023 7.832-19.915 14.938-25.909 2.786-2.351 5.501-4.235 8.662-5.409 2.062-.766 4.182-1.193 6.446-1.205 7.33-13.626 16.098-25.671 26.436-35.982 11.392-11.363 24.674-20.593 40.019-27.483 10.445-4.691 19.777-8.13 29.458-9.774 9.881-1.679 19.933-1.469 31.571 1.207 5.199 1.195 10.458 2.794 15.76 4.7 3.68 1.324 7.34 2.785 10.981 4.352 4.052-3.23 10.628-3.761 18.563-2.209 6.7 1.31 14.855 4.085 23.33 7.838 20.587 9.118 43.715 24.414 53.13 38.93a55.272 55.272 0 012.284-.309c5.095-.575 10.02-.267 14.811.703 4.045.817 7.899 2.078 11.618 3.65z"
        />
        <path
          fill="#7CAF22"
          d="M359.312 88.53l1.887-.298c-6.63-136.99 190.722-83.341 133.473 30.356-11.755 1.845-23.511 1.167-35.265-.893 5.736 6.282 13.095 12.799 17.717 19.641-28.468 19.982-61.956 17.267-100.945 18.452-26.983.819-29.05 2.711-48.41 13.715l-12.992-18.255c15.185-16.734 29.685-36.15 43.55-58.012a6.816 6.816 0 00.985-4.706zM262.192 225.122c-29.301 18.022-63.879 25.081-104.327 18.005.632-5.786.585-12.113-.043-18.9 32.436-1.085 65.549-7.323 92.724-21.264.669 1.295 1.359 2.641 2.071 4.029 2.877 5.611 6.099 11.889 9.575 18.13z"
        />
        <path
          fill="#DF8A57"
          d="M82.736 98.066c14.647-26.341 34.979-46.214 62.079-58.384 19.9-8.938 35.321-13.058 56.718-8.138 8.018 1.842 16.034 4.631 24.053 8.012-6.393 8.388-10.956 18.996-14.114 31.312-2.697 10.521-4.367 22.296-5.283 34.987-11.552-3.557-24.722-1.645-38.01 3.909-14.165 5.923-28.62 16.073-41.221 27.984a60.768 60.768 0 00-3.127-8.023c-7.629-16.029-21.475-26.397-41.095-31.659z"
        />
        <path
          fill="#C76D33"
          d="M95.71 102.677c15.299-18.441 34.031-32.977 56.621-43.122 23.646-10.621 42.108-15.661 67.178-10.361-3.347 6.413-5.988 13.684-8.037 21.674-2.697 10.521-4.367 22.296-5.283 34.987-11.552-3.557-24.722-1.645-38.01 3.909-14.165 5.923-28.62 16.073-41.221 27.984a60.768 60.768 0 00-3.127-8.023c-5.821-12.229-15.26-21.161-28.121-27.048z"
        />
        <path
          fill="#DF8A57"
          d="M212.849 108.625c1.832-28.48 7.356-52.124 19.702-66.826 2.97-14.768 66.473 13.069 85.137 38.364-12.468 3.99-20.364 12.546-28.888 21.783-2.606 2.824-5.279 5.72-8.004 8.378-12.62 12.304-25.088 23.128-37.406 32.47l-27.746-32.073a6.797 6.797 0 00-1.916-1.613 34.169 34.169 0 00-.879-.483z"
        />
        <path
          fill="#C76D33"
          d="M212.849 108.625c1.411-21.931 5.011-40.992 12.23-55.313 18.296 1.585 54.873 19.297 74.212 37.916-3.629 3.282-7.008 6.944-10.491 10.718-2.606 2.824-5.279 5.72-8.004 8.378-12.62 12.304-25.088 23.128-37.406 32.47l-27.746-32.073a6.797 6.797 0 00-1.916-1.613l-.014-.008-.013-.008-.014-.008-.013-.008-.014-.007-.014-.008-.233-.13-.014-.007-.054-.03-.014-.008-.014-.008-.028-.015-.013-.008-.014-.007-.014-.007-.014-.008-.014-.008-.013-.007-.014-.008-.013-.007-.208-.112-.013-.007-.013-.007-.014-.008-.014-.007-.014-.008-.014-.007-.013-.007-.014-.007-.014-.008z"
        />
        <path
          fill="#7CAF22"
          d="M33.308 199.981c-5.504 12.642-14.491 20.931-26.458 25.498 22.457 3.822 41.722.536 56.561-12.611-12.406-3.743-22.756-8.161-30.103-12.887zm117.652 24.401c1.621 16.758-.467 30.232-7.958 38.93H49.86c-14.159-.637-21.895 3.633-15.678-7.516 8.339-14.953 17.7-29.495 29.571-42.824 22.103 6.628 50.664 11.117 80.376 11.416 2.27.022 4.547.019 6.831-.006zM256.544 199.7c8.813 17.067 21.816 43.795 34.482 52.373 4.785 3.24 9.826 4.802 15.157 4.491l75.773.871-71.925-101.068c-16.428 17.336-33.651 31.536-51.736 42.31-.58.345-1.164.686-1.751 1.023z"
        />
        <ellipse cx="440.77" cy="91.249" rx="9.809" ry="16.052" />
        <path
          fill="#C76D33"
          d="M128.87 145.41c25.304-25.039 59.265-43.004 81.484-30.358l27.532 31.825c-26.221 19.013-51.749 31.245-76.572 36.617-11.19 2.421-22.258 3.44-33.206 3.052 2.775-15.819 2.994-29.49.762-41.136z"
        />
        <path
          fill="#DF8A57"
          d="M121.23 186.115c8.494-47.156-6.586-73.202-42.178-81.936-5.717-1.402-9.666.769-14.167 4.564-10.828 9.135-15.414 27.086-16.946 49.659 1.155.313 2.331.7 3.528 1.179.47.188.908.424 1.31.698 22.253 15.143 45.074 23.733 68.453 25.836z"
        />
        <path
          fill="#C76D33"
          d="M121.231 186.115c5.81-32.258.586-54.635-14.686-68.351a99.46 99.46 0 00-5.959-1.658c-6.54-1.603-11.056.88-16.203 5.221-10.786 9.096-16.156 25.842-18.522 47.064 18.092 10.135 36.55 16.032 55.37 17.724z"
        />
        <path
          fill="#FFC344"
          d="M32.087 190.578c-14.67-8.921-3.078-32.613 16.835-24.651 72.872 49.593 151.815 32.003 236.64-50.703 13.59-13.251 22.236-27.977 42.294-30.245 8.792-.993 16.908 1.051 24.692 4.591-29.673 46.767-62.072 81.982-97.761 103.243-70.994 42.291-194.647 22.807-222.7-2.235z"
        />
      </svg>
    </div>
  );
}
