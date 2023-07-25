"use client";
import React from "react";
import { motion } from "framer-motion";
function Camera() {
  const variants = {
    show: {
      pathLength: 1,

      transition: { duration: 6, once: true },
    },
  };
  return (
    <motion.svg
      fill="none"
      className="w-[130px] p-4 stroke-red-300  "
      version="1.1"
      id="Capa_1"
      strokeWidth={8}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      whileInView="show"
      viewport={{ once: true }}
    >
      <g>
        <motion.path
          initial={{ pathLength: 0 }}
          variants={variants}
          d="M417.5,120H313.355l-11.303-45.215C297.176,55.28,277.606,40,257.5,40h-60c-20.106,0-39.676,15.28-44.553,34.785
		L141.645,120H130V97.5c0-4.142-3.357-7.5-7.5-7.5h-60c-4.143,0-7.5,3.358-7.5,7.5V120H37.5C16.822,120,0,136.823,0,157.5v220
		C0,398.177,16.822,415,37.5,415h380c20.678,0,37.5-16.823,37.5-37.5v-220C455,136.823,438.178,120,417.5,120z M70,105h45v15H70V105
		z M37.5,135h110c3.441,0,6.441-2.342,7.276-5.681L167.5,78.423C170.674,65.727,184.412,55,197.5,55h60
		c13.088,0,26.826,10.727,30,23.423l12.724,50.896c0.835,3.339,3.835,5.681,7.276,5.681h110c12.406,0,22.5,10.094,22.5,22.5V180
		H305.832c-20.803-18.643-48.264-30-78.332-30s-57.528,11.357-78.332,30H15v-22.5C15,145.094,25.094,135,37.5,135z M227.5,370
		C170.981,370,125,324.019,125,267.5S170.981,165,227.5,165S330,210.981,330,267.5S284.019,370,227.5,370z M15,195h120.094
		c-10.27,13.061-17.827,28.347-21.836,45H99.315c-15.163,0-27.5,12.336-27.5,27.5s12.337,27.5,27.5,27.5h13.942
		c4.009,16.653,11.566,31.939,21.836,45H15V195z M110.666,280h-11.35c-6.893,0-12.5-5.607-12.5-12.5s5.607-12.5,12.5-12.5h11.35
		c-0.437,4.108-0.666,8.278-0.666,12.5S110.229,275.892,110.666,280z M417.5,400h-380C25.094,400,15,389.906,15,377.5V355h134.168
		c20.803,18.643,48.264,30,78.332,30s57.528-11.357,78.332-30H357.5c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-37.594
		C335.619,320.017,345,294.834,345,267.5s-9.381-52.517-25.094-72.5H440v145h-52.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5
		H440v22.5C440,389.906,429.906,400,417.5,400z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          variants={variants}
          d="M178.424,135h98.152c2.31,0,4.49-1.064,5.911-2.884c1.422-1.82,1.925-4.194,1.365-6.435l-12.499-50
		c-0.835-3.339-3.835-5.681-7.276-5.681h-73.154c-3.441,0-6.441,2.342-7.276,5.681l-12.499,50c-0.56,2.24-0.057,4.614,1.365,6.435
		C173.934,133.936,176.114,135,178.424,135z M196.778,85h61.443l8.749,35h-78.941L196.778,85z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          variants={variants}
          d="M227.5,190c-42.733,0-77.5,34.766-77.5,77.5s34.767,77.5,77.5,77.5s77.5-34.766,77.5-77.5S270.233,190,227.5,190z
		 M227.5,330c-34.463,0-62.5-28.037-62.5-62.5s28.037-62.5,62.5-62.5s62.5,28.037,62.5,62.5S261.963,330,227.5,330z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          variants={{
            show: {
              pathLength: 1,

              transition: { duration: 1 },
            },
          }}
          d="M271.229,248.975c-1.613-3.817-6.017-5.602-9.827-3.991c-3.816,1.612-5.603,6.011-3.991,9.827
		c5.185,12.274,2.465,26.275-6.93,35.669c-6.126,6.126-14.287,9.5-22.98,9.5s-16.854-3.374-22.98-9.5
		c-2.93-2.929-7.678-2.929-10.607,0c-2.929,2.929-2.929,7.677,0,10.606c8.96,8.959,20.888,13.894,33.588,13.894
		c12.699,0,24.629-4.935,33.588-13.894C274.819,287.356,278.8,266.901,271.229,248.975z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          variants={{
            show: {
              pathLength: 1,

              transition: { duration: 1 },
            },
          }}
          d="M199.216,246.716c1.919,0,3.839-0.732,5.304-2.197c9.393-9.393,23.392-12.114,35.669-6.929
		c3.814,1.61,8.216-0.175,9.827-3.991c1.611-3.816-0.176-8.216-3.991-9.827c-17.927-7.57-38.38-3.591-52.112,10.141
		c-2.929,2.929-2.929,7.678,0,10.607C195.377,245.984,197.297,246.716,199.216,246.716z"
        />
      </g>
    </motion.svg>
  );
}

export default Camera;
