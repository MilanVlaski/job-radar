import React from "react";

export function CustomLogo() {
    return <div className={'d-flex justify-content-between align-items-center bg-body '}>
        <div className={'col-2 col-lg-4  col-md-3 col-sm-2'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px"
                 viewBox="0 0 30 30" version="1.1">
                <g id="surface1">
                    <path className={"stroke fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                          d="M 8.304688 9.671875 C 8.394531 10.332031 8.460938 11.460938 8.460938 12.34375 L 8.460938 13.320312 L 10.800781 13.320312 L 10.800781 12.335938 C 10.800781 11.425781 10.878906 10.0625 10.949219 9.613281 L 10.984375 9.421875 L 8.273438 9.421875 Z M 8.304688 9.671875 "/>
                    <path
                        className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                        d="M 12.203125 9.757812 C 12.289062 10.507812 12.359375 11.824219 12.359375 12.550781 L 12.359375 13.320312 L 14.699219 13.320312 L 14.699219 9.707031 L 15.589844 9.738281 C 16.285156 9.761719 16.546875 9.792969 16.828125 9.894531 C 17.53125 10.144531 18.011719 10.644531 18.226562 11.339844 C 18.304688 11.585938 18.328125 11.886719 18.328125 12.492188 L 18.328125 13.320312 L 20.695312 13.320312 L 20.734375 13.042969 C 20.753906 12.894531 20.761719 12.523438 20.746094 12.214844 C 20.683594 10.996094 19.984375 10.199219 18.628906 9.78125 C 17.765625 9.515625 17.203125 9.46875 14.617188 9.4375 L 12.167969 9.40625 Z M 12.203125 9.757812 "/>
                    <path
                        className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                        d="M 8.460938 18.949219 C 8.460938 20.292969 8.429688 21.625 8.398438 21.898438 C 8.292969 22.746094 8.015625 23.171875 7.339844 23.53125 C 7.097656 23.65625 7.019531 23.773438 7.128906 23.839844 C 7.1875 23.878906 8.089844 23.730469 8.496094 23.609375 C 9.402344 23.347656 10.140625 22.789062 10.457031 22.140625 C 10.765625 21.511719 10.800781 21.175781 10.800781 18.730469 L 10.800781 16.5 L 8.460938 16.5 Z M 8.460938 18.949219 "/>
                    <path
                        className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                        d="M 12.359375 17.441406 C 12.359375 18.371094 12.28125 19.894531 12.203125 20.472656 L 12.160156 20.761719 L 14.832031 20.761719 L 14.796875 20.472656 C 14.777344 20.316406 14.742188 19.363281 14.722656 18.34375 L 14.6875 16.5 L 12.359375 16.5 Z M 12.359375 17.441406 "/>
                    <path
                        className={" stroke:none fill-rule:nonzero fill:#00A8C6 fill-opacity:1 "}
                        d="M 17.164062 16.871094 C 17.273438 17.082031 17.484375 17.59375 17.640625 18.019531 C 17.796875 18.4375 18.019531 18.929688 18.125 19.117188 C 18.539062 19.800781 19.242188 20.28125 20.171875 20.519531 C 20.644531 20.632812 21.761719 20.761719 22.398438 20.761719 C 22.691406 20.761719 22.738281 20.742188 22.738281 20.644531 C 22.738281 20.550781 22.667969 20.519531 22.339844 20.460938 C 21.457031 20.308594 21.011719 19.890625 20.417969 18.660156 C 19.78125 17.339844 19.636719 17.09375 19.265625 16.691406 L 19.085938 16.5 L 16.980469 16.5 Z M 17.164062 16.871094 "/>
                </g>
            </svg>
        </div>
        <div className={'col-8 d-none d-sm-block'}>
            <label className={'col-12 text-label text-nowrap text-start fs-5 fs-sm-4 fw-bold'}
                   htmlFor="">Job
                Radar</label><br/>
            <label className={'text-muted text-nowrap  fs-sm-6 fs-6  col-12 fw-bold '} htmlFor="">Get your
                dream
                job</label>
        </div>
    </div>
}