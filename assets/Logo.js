import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path} from 'react-native-svg';

 function Logo(){
    return (

        <View style={styles.container}>
            <Svg width="139" height="26" viewBox="0 0 139 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M22.05 11.35C22.27 11.57 22.43 11.9 22.53 12.34C22.65 12.76 22.67 13.23 22.59 13.75C22.53 14.19 22.38 14.64 22.14 15.1C21.9 15.56 21.54 15.96 21.06 16.3C20.68 16.56 20.4 16.99 20.22 17.59C20.04 18.17 19.92 18.76 19.86 19.36C19.78 20.04 19.6 20.74 19.32 21.46C19.06 22.18 18.65 22.82 18.09 23.38C17.65 23.9 17.01 24.38 16.17 24.82C15.35 25.24 14.23 25.44 12.81 25.42C12.01 25.4 11.07 25.26 9.99 25C8.93 24.74 7.85 24.32 6.75 23.74C5.67 23.14 4.68 22.34 3.78 21.34C2.88 20.34 2.19 19.1 1.71 17.62C1.23 16.14 1.09 14.38 1.29 12.34C1.47 10.4 1.95 8.72 2.73 7.3C3.53 5.88 4.52 4.71 5.7 3.79C6.88 2.87 8.15 2.18 9.51 1.72C10.87 1.24 12.22 0.989999 13.56 0.969998C14.74 0.929999 15.77 1.11 16.65 1.51C17.53 1.91 18.23 2.43 18.75 3.07C19.29 3.69 19.65 4.36 19.83 5.08C20.03 5.78 20.03 6.42 19.83 7C19.67 7.5 19.44 7.91 19.14 8.23C18.86 8.55 18.55 8.77 18.21 8.89C17.79 9.05 17.36 9.08 16.92 8.98C16.48 8.86 16.1 8.61 15.78 8.23C16.12 7.97 16.22 7.69 16.08 7.39C15.96 7.07 15.65 6.81 15.15 6.61C14.65 6.39 14.01 6.31 13.23 6.37C12.63 6.41 11.99 6.58 11.31 6.88C10.65 7.18 10.02 7.6 9.42 8.14C8.84 8.68 8.36 9.34 7.98 10.12C7.6 10.9 7.39 11.79 7.35 12.79C7.29 14.17 7.41 15.29 7.71 16.15C8.03 17.01 8.45 17.66 8.97 18.1C9.49 18.54 10.05 18.84 10.65 19C11.25 19.16 11.83 19.24 12.39 19.24C12.87 19.24 13.26 19.09 13.56 18.79C13.88 18.49 14.01 18.13 13.95 17.71C13.89 17.29 13.53 16.89 12.87 16.51C12.25 16.17 11.85 15.84 11.67 15.52C11.49 15.2 11.34 14.88 11.22 14.56C11.02 14.04 10.85 13.48 10.71 12.88C10.57 12.28 10.51 11.77 10.53 11.35C10.69 11.41 11.1 11.51 11.76 11.65C12.42 11.77 13.18 11.88 14.04 11.98C14.92 12.08 15.75 12.14 16.53 12.16C17.35 12.16 18.14 12.14 18.9 12.1C19.66 12.04 20.32 11.95 20.88 11.83C21.46 11.71 21.85 11.55 22.05 11.35ZM41.5784 19.57C41.5984 20.01 41.6284 20.55 41.6684 21.19C41.7284 21.83 41.8584 22.45 42.0584 23.05C42.2584 23.65 42.5784 24.13 43.0184 24.49C42.5184 24.83 42.0084 25.07 41.4884 25.21C40.9684 25.37 40.4584 25.41 39.9584 25.33C39.8184 25.29 39.6684 25.24 39.5084 25.18C39.3484 25.14 39.1284 25.08 38.8484 25C38.3884 24.86 37.8484 24.83 37.2284 24.91C36.6084 24.99 35.9584 25.09 35.2784 25.21C34.6184 25.35 33.9684 25.42 33.3284 25.42C32.2884 25.42 31.2484 25.24 30.2084 24.88C29.1684 24.5 28.2284 23.92 27.3884 23.14C26.5484 22.36 25.9084 21.37 25.4684 20.17C25.0284 18.97 24.8984 17.53 25.0784 15.85C25.1984 14.69 25.5284 13.63 26.0684 12.67C26.6084 11.69 27.2684 10.85 28.0484 10.15C28.8484 9.43 29.6884 8.88 30.5684 8.5C31.4684 8.1 32.3384 7.91 33.1784 7.93C33.8184 7.95 34.3084 7.97 34.6484 7.99C35.0084 8.01 35.4684 8.06 36.0284 8.14C36.3684 8.18 36.7984 8.13 37.3184 7.99C37.8384 7.85 38.3584 7.7 38.8784 7.54C39.4184 7.36 39.8784 7.27 40.2584 7.27C40.8384 7.25 41.2484 7.27 41.4884 7.33C41.7284 7.37 41.9284 7.41 42.0884 7.45C41.9684 7.81 41.8684 8.35 41.7884 9.07C41.7084 9.79 41.6484 10.61 41.6084 11.53C41.5884 12.43 41.5684 13.37 41.5484 14.35C41.5284 15.33 41.5184 16.27 41.5184 17.17C41.5384 18.07 41.5584 18.87 41.5784 19.57ZM30.2984 16.81C30.3384 17.81 30.5184 18.59 30.8384 19.15C31.1784 19.69 31.5784 20.07 32.0384 20.29C32.5184 20.51 32.9784 20.62 33.4184 20.62C34.2984 20.64 34.9484 20.3 35.3684 19.6C35.7884 18.9 35.9884 17.93 35.9684 16.69C35.9684 16.35 35.9284 15.95 35.8484 15.49C35.7884 15.03 35.6684 14.58 35.4884 14.14C35.3284 13.7 35.0984 13.33 34.7984 13.03C34.5184 12.73 34.1484 12.58 33.6884 12.58C32.7684 12.58 31.9584 12.92 31.2584 13.6C30.5784 14.28 30.2584 15.35 30.2984 16.81ZM53.239 7.57C54.719 7.57 55.979 7.78 57.019 8.2C58.079 8.62 58.889 9.14 59.449 9.76C60.009 10.38 60.279 10.99 60.259 11.59C60.259 11.91 60.119 12.27 59.839 12.67C59.559 13.07 59.189 13.41 58.729 13.69C58.289 13.95 57.799 14.05 57.259 13.99C57.399 13.63 57.309 13.29 56.989 12.97C56.669 12.65 56.209 12.39 55.609 12.19C55.009 11.97 54.359 11.85 53.659 11.83C52.859 11.79 52.319 11.88 52.039 12.1C51.759 12.3 51.599 12.52 51.559 12.76C51.499 13.02 51.619 13.25 51.919 13.45C52.219 13.63 52.609 13.8 53.089 13.96C53.589 14.1 54.109 14.23 54.649 14.35C55.209 14.45 55.719 14.54 56.179 14.62C56.659 14.7 57.029 14.78 57.289 14.86C58.489 15.22 59.369 15.69 59.929 16.27C60.489 16.83 60.849 17.43 61.009 18.07C61.189 18.71 61.259 19.34 61.219 19.96C61.179 20.96 60.919 21.8 60.439 22.48C59.979 23.14 59.399 23.67 58.699 24.07C58.019 24.47 57.299 24.77 56.539 24.97C55.799 25.15 55.099 25.27 54.439 25.33C53.799 25.39 53.309 25.42 52.969 25.42C51.929 25.4 50.949 25.29 50.029 25.09C49.129 24.91 48.349 24.67 47.689 24.37C47.049 24.07 46.589 23.75 46.309 23.41C46.109 23.17 45.919 22.83 45.739 22.39C45.559 21.95 45.449 21.48 45.409 20.98C45.389 20.46 45.499 19.97 45.739 19.51C45.979 19.03 46.419 18.64 47.059 18.34C47.179 18.74 47.499 19.1 48.019 19.42C48.559 19.74 49.199 20 49.939 20.2C50.699 20.4 51.449 20.54 52.189 20.62C52.909 20.68 53.589 20.67 54.229 20.59C54.869 20.51 55.219 20.28 55.279 19.9C55.319 19.7 55.219 19.5 54.979 19.3C54.739 19.1 54.299 18.93 53.659 18.79C52.979 18.63 52.379 18.51 51.859 18.43C51.359 18.33 50.859 18.22 50.359 18.1C49.419 17.86 48.599 17.48 47.899 16.96C47.199 16.44 46.669 15.82 46.309 15.1C45.969 14.36 45.849 13.58 45.949 12.76C46.109 11.58 46.539 10.61 47.239 9.85C47.959 9.09 48.849 8.52 49.909 8.14C50.969 7.76 52.079 7.57 53.239 7.57ZM82.1416 7.54C83.5016 7.72 84.5016 8.14 85.1416 8.8C85.8016 9.44 86.1816 10.19 86.2816 11.05C86.3816 11.91 86.2816 12.78 85.9816 13.66C85.8216 14.16 85.5916 14.81 85.2916 15.61C85.0116 16.39 84.7116 17.19 84.3916 18.01C84.0916 18.83 83.8116 19.57 83.5516 20.23C83.3116 20.87 83.1316 21.32 83.0116 21.58C82.5316 22.7 82.0316 23.55 81.5116 24.13C80.9916 24.71 80.3116 25.02 79.4716 25.06C79.0116 25.08 78.5716 24.94 78.1516 24.64C77.7516 24.32 77.4316 23.98 77.1916 23.62C77.1316 23.54 77.0816 23.34 77.0416 23.02C77.0216 22.68 77.0016 22.34 76.9816 22C76.9616 21.64 76.9216 21.4 76.8616 21.28C76.8216 21.14 76.7316 20.88 76.5916 20.5C76.4716 20.1 76.3016 19.73 76.0816 19.39C75.8816 19.03 75.6316 18.86 75.3316 18.88C75.0916 18.9 74.8616 19.09 74.6416 19.45C74.4216 19.81 74.1116 20.4 73.7116 21.22C73.3116 22.08 72.9716 22.79 72.6916 23.35C72.4116 23.89 72.1316 24.29 71.8516 24.55C71.5916 24.81 71.2616 24.94 70.8616 24.94C70.1816 24.94 69.6416 24.82 69.2416 24.58C68.8416 24.32 68.5116 24.02 68.2516 23.68C68.1916 23.6 68.1416 23.39 68.1016 23.05C68.0616 22.71 68.0216 22.36 67.9816 22C67.9616 21.64 67.9216 21.4 67.8616 21.28C67.6416 20.66 67.3816 19.92 67.0816 19.06C66.7816 18.18 66.4716 17.24 66.1516 16.24C65.8516 15.24 65.5516 14.26 65.2516 13.3C64.9516 12.34 64.6716 11.47 64.4116 10.69C64.1716 9.89 63.9816 9.26 63.8416 8.8C63.7016 8.32 63.6316 8.08 63.6316 8.08C63.9316 8.04 64.3416 7.99 64.8616 7.93C65.3816 7.87 65.9316 7.86 66.5116 7.9C67.1116 7.94 67.6716 8.09 68.1916 8.35C68.7116 8.61 69.1316 9.03 69.4516 9.61C69.5316 9.75 69.6216 10 69.7216 10.36C69.8416 10.7 69.9616 11.05 70.0816 11.41C70.2016 11.75 70.2916 12.01 70.3516 12.19C70.4516 12.45 70.6016 12.7 70.8016 12.94C71.0016 13.16 71.1916 13.28 71.3716 13.3C71.7316 13.3 72.0016 13.14 72.1816 12.82C72.3616 12.48 72.4816 12.1 72.5416 11.68C72.6216 11.24 72.6716 10.87 72.6916 10.57C72.7116 10.43 72.7116 10.18 72.6916 9.82C72.6716 9.44 72.6516 9.09 72.6316 8.77C72.6316 8.43 72.6316 8.26 72.6316 8.26C72.9316 8.22 73.3116 8.17 73.7716 8.11C74.2516 8.03 74.7516 8 75.2716 8.02C75.8116 8.04 76.3216 8.18 76.8016 8.44C77.2816 8.68 77.6816 9.09 78.0016 9.67C78.1016 9.85 78.2216 10.17 78.3616 10.63C78.5216 11.09 78.6716 11.55 78.8116 12.01C78.9716 12.47 79.0816 12.81 79.1416 13.03C79.2416 13.35 79.3716 13.58 79.5316 13.72C79.7116 13.84 79.8716 13.9 80.0116 13.9C80.3116 13.9 80.5616 13.72 80.7616 13.36C80.9816 13 81.1516 12.6 81.2716 12.16C81.4116 11.72 81.5116 11.4 81.5716 11.2C81.7516 10.5 81.9116 9.82 82.0516 9.16C82.1916 8.48 82.2216 7.94 82.1416 7.54ZM104.684 19.57C104.704 20.01 104.734 20.55 104.774 21.19C104.834 21.83 104.964 22.45 105.164 23.05C105.364 23.65 105.684 24.13 106.124 24.49C105.624 24.83 105.114 25.07 104.594 25.21C104.074 25.37 103.564 25.41 103.064 25.33C102.924 25.29 102.774 25.24 102.614 25.18C102.454 25.14 102.234 25.08 101.954 25C101.494 24.86 100.954 24.83 100.334 24.91C99.7138 24.99 99.0638 25.09 98.3838 25.21C97.7238 25.35 97.0738 25.42 96.4338 25.42C95.3938 25.42 94.3538 25.24 93.3138 24.88C92.2738 24.5 91.3338 23.92 90.4938 23.14C89.6538 22.36 89.0138 21.37 88.5738 20.17C88.1338 18.97 88.0038 17.53 88.1838 15.85C88.3038 14.69 88.6338 13.63 89.1738 12.67C89.7138 11.69 90.3738 10.85 91.1538 10.15C91.9538 9.43 92.7938 8.88 93.6738 8.5C94.5738 8.1 95.4438 7.91 96.2838 7.93C96.9238 7.95 97.4138 7.97 97.7538 7.99C98.1138 8.01 98.5738 8.06 99.1338 8.14C99.4738 8.18 99.9038 8.13 100.424 7.99C100.944 7.85 101.464 7.7 101.984 7.54C102.524 7.36 102.984 7.27 103.364 7.27C103.944 7.25 104.354 7.27 104.594 7.33C104.834 7.37 105.034 7.41 105.194 7.45C105.074 7.81 104.974 8.35 104.894 9.07C104.814 9.79 104.754 10.61 104.714 11.53C104.694 12.43 104.674 13.37 104.654 14.35C104.634 15.33 104.624 16.27 104.624 17.17C104.644 18.07 104.664 18.87 104.684 19.57ZM93.4038 16.81C93.4438 17.81 93.6238 18.59 93.9438 19.15C94.2838 19.69 94.6838 20.07 95.1438 20.29C95.6238 20.51 96.0838 20.62 96.5238 20.62C97.4038 20.64 98.0538 20.3 98.4738 19.6C98.8938 18.9 99.0938 17.93 99.0738 16.69C99.0738 16.35 99.0338 15.95 98.9538 15.49C98.8938 15.03 98.7738 14.58 98.5938 14.14C98.4338 13.7 98.2038 13.33 97.9038 13.03C97.6238 12.73 97.2538 12.58 96.7938 12.58C95.8738 12.58 95.0638 12.92 94.3638 13.6C93.6838 14.28 93.3638 15.35 93.4038 16.81ZM118.144 7.63C118.544 7.53 118.914 7.63 119.254 7.93C119.594 8.23 119.894 8.64 120.154 9.16C120.434 9.66 120.664 10.18 120.844 10.72C121.024 11.24 121.164 11.68 121.264 12.04C121.364 12.4 121.414 12.58 121.414 12.58C121.414 12.58 121.174 12.63 120.694 12.73C120.234 12.81 119.654 12.98 118.954 13.24C118.274 13.48 117.594 13.85 116.914 14.35C116.514 14.65 116.134 15.01 115.774 15.43C115.414 15.85 115.104 16.39 114.844 17.05C114.584 17.69 114.394 18.54 114.274 19.6C114.214 20.14 114.204 20.7 114.244 21.28C114.284 21.86 114.304 22.35 114.304 22.75C114.324 23.11 114.374 23.37 114.454 23.53C114.554 23.67 114.634 23.79 114.694 23.89C114.434 24.13 113.954 24.4 113.254 24.7C112.574 24.98 111.824 25.12 111.004 25.12C110.204 25.12 109.614 24.86 109.234 24.34C108.854 23.82 108.664 23.1 108.664 22.18C108.664 21.96 108.654 21.48 108.634 20.74C108.634 19.98 108.624 19.07 108.604 18.01C108.604 16.95 108.594 15.85 108.574 14.71C108.574 13.57 108.564 12.51 108.544 11.53C108.544 10.53 108.534 9.72 108.514 9.1C108.514 8.48 108.514 8.17 108.514 8.17C108.714 8.13 109.054 8.1 109.534 8.08C110.034 8.06 110.574 8.08 111.154 8.14C111.734 8.2 112.274 8.34 112.774 8.56C113.014 8.66 113.334 8.76 113.734 8.86C114.154 8.94 114.554 8.98 114.934 8.98C115.334 8.98 115.624 8.92 115.804 8.8C116.184 8.52 116.564 8.28 116.944 8.08C117.344 7.88 117.744 7.73 118.144 7.63ZM137.433 17.47C137.933 17.81 138.253 18.3 138.393 18.94C138.553 19.56 138.533 20.24 138.333 20.98C138.153 21.72 137.783 22.43 137.223 23.11C136.663 23.77 135.903 24.32 134.943 24.76C134.003 25.2 132.863 25.43 131.523 25.45C130.403 25.47 129.303 25.33 128.223 25.03C127.163 24.73 126.193 24.27 125.313 23.65C124.453 23.03 123.753 22.23 123.213 21.25C122.673 20.27 122.373 19.1 122.313 17.74C122.293 17.46 122.293 17.17 122.313 16.87C122.333 16.57 122.353 16.26 122.373 15.94C122.373 15.86 122.373 15.78 122.373 15.7C122.393 15.62 122.413 15.54 122.433 15.46C122.633 14.26 123.043 13.16 123.663 12.16C124.303 11.16 125.083 10.31 126.003 9.61C126.923 8.91 127.903 8.4 128.943 8.08C130.003 7.74 131.043 7.62 132.063 7.72C133.643 7.88 134.863 8.3 135.723 8.98C136.603 9.66 137.173 10.5 137.433 11.5C137.713 12.48 137.723 13.54 137.463 14.68C137.323 15.24 137.003 15.8 136.503 16.36C136.023 16.9 135.423 17.39 134.703 17.83C133.983 18.25 133.213 18.58 132.393 18.82C131.593 19.04 130.813 19.13 130.053 19.09C129.673 19.07 129.473 19.19 129.453 19.45C129.433 19.69 129.543 19.96 129.783 20.26C130.023 20.54 130.343 20.73 130.743 20.83C131.683 21.03 132.563 21.04 133.383 20.86C134.223 20.66 134.863 20.39 135.303 20.05C135.663 19.77 136.043 19.4 136.443 18.94C136.843 18.46 137.173 17.97 137.433 17.47ZM130.863 14.44C131.323 14.4 131.723 14.26 132.063 14.02C132.423 13.76 132.603 13.49 132.603 13.21C132.623 12.81 132.523 12.49 132.303 12.25C132.103 11.99 131.753 11.87 131.253 11.89C130.693 11.91 130.153 11.99 129.633 12.13C129.113 12.27 128.803 12.56 128.703 13C128.643 13.3 128.733 13.56 128.973 13.78C129.213 14 129.513 14.17 129.873 14.29C130.233 14.39 130.563 14.44 130.863 14.44Z" fill="#B7447B"/>
                </Svg>

        </View>
        
    )
}
export default Logo
const styles = StyleSheet.create({
    container: {
    //   paddingTop:50,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   marginBottom:40,
    },
  });