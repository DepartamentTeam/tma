//@ts-nocheck
import { Chip } from "../Chip/Chip";

type Props = {
	className?: string;
};

export default function Logo({ className }: Props) {
	return (
		<div className="flex">

		
		<svg
			className={className}
			width="153"
			height="56"
			viewBox="0 0 153 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M18.8127 10.5333C20.4241 10.5625 21.9058 10.0433 23.4407 9.45996C23.0992 9.38651 22.7739 9.25188 22.4804 9.06256C21.9423 8.71038 21.8825 8.06725 22.3418 7.61663C22.5302 7.4416 22.7701 7.33235 23.0258 7.30527C23.485 7.24397 23.948 7.21521 24.4112 7.21923C26.5499 7.20392 28.6346 7.55538 30.6675 8.20069C32.5166 8.78694 34.2134 9.66704 35.6798 10.9533C36.6924 11.8319 37.5614 12.8635 38.2552 14.0107C38.4885 14.3964 38.4936 14.3964 38.9311 14.2506C39.7128 13.991 40.509 13.8058 41.3374 13.8131C42.087 13.8196 42.4435 14.3366 42.1941 15.0461C42.0947 15.3307 41.9461 15.5934 41.7988 15.8536C41.7808 15.8854 41.7628 15.9171 41.745 15.9488C41.3614 16.6342 40.897 17.2642 40.4172 17.8833C40.3005 18.0342 40.2888 18.1502 40.4266 18.2821C40.4761 18.3356 40.5219 18.3924 40.5637 18.452C42.41 20.7839 43.5577 23.406 43.853 26.3803C44.1044 28.8066 43.6501 31.2539 42.5449 33.4284C41.0085 36.4997 38.6365 38.7367 35.5777 40.2614C35.3713 40.3642 35.3115 40.4525 35.418 40.6712C35.7391 41.3213 36.0517 41.9764 36.364 42.6311C36.4276 42.7644 36.4911 42.8976 36.5548 43.0308C36.5744 43.0859 36.6117 43.133 36.6609 43.1647C36.7101 43.1963 36.7684 43.2108 36.8267 43.2058C37.3029 43.2058 37.7316 43.3626 38.0517 43.7162C38.2384 43.9211 38.3748 43.8876 38.5746 43.7585C42.5646 41.1926 45.1845 37.6554 46.2308 32.9982C46.2686 32.8305 46.3 32.6616 46.3316 32.4922C46.3811 32.2264 46.4309 31.959 46.5057 31.6923C46.6282 31.2555 47.0015 31.0433 47.4048 31.1308C47.808 31.2183 48.0493 31.5603 48.0034 32.0109C47.9706 32.3361 47.9203 32.6606 47.8641 32.9829C47.4615 35.3601 46.5675 37.6273 45.2391 39.6394C43.6517 42.0435 41.5758 43.9372 39.1309 45.4385C38.9625 45.5406 38.9056 45.6449 38.937 45.8323C38.9792 46.0748 38.9677 46.3237 38.9034 46.5614C38.7685 47.0463 38.4688 47.3868 37.9664 47.4897C37.5209 47.5801 37.1811 47.3672 36.8829 47.0485C36.835 46.9973 36.8106 46.9243 36.7867 46.8531C36.7475 46.7359 36.7099 46.6235 36.5715 46.6212C36.4482 46.6192 36.3237 46.6768 36.1992 46.7344C36.1442 46.7599 36.0891 46.7854 36.0341 46.8057C35.9921 46.8224 35.949 46.8363 35.9051 46.8473C35.7279 46.8852 35.6404 46.9763 35.6025 47.171C35.5724 47.3669 35.4843 47.5493 35.3495 47.6947C35.2147 47.84 35.0394 47.9415 34.8463 47.9862C34.6603 48.0399 34.4628 48.0389 34.2774 47.9833C34.092 47.9277 33.9265 47.8199 33.8007 47.6727C33.6366 47.486 33.4901 47.4831 33.2801 47.5268C31.6558 47.8608 29.9937 47.9729 28.3392 47.8601C28.1132 47.8455 28.0082 47.8994 27.92 48.1182C27.7493 48.5448 27.4023 48.7825 26.9422 48.7744C26.4821 48.7664 26.0898 48.5557 25.9665 48.1182C25.8513 47.7099 25.6085 47.6041 25.2578 47.564C25.1907 47.556 25.1236 47.5399 25.0562 47.5237C25.0263 47.5165 24.9962 47.5093 24.9661 47.5028C24.767 47.4607 24.6688 47.4399 24.6056 47.4777C24.5441 47.5145 24.5158 47.6069 24.4601 47.7893C24.2938 48.334 23.9037 48.6578 23.4276 48.6454C22.9135 48.6308 22.503 48.2917 22.3513 47.7558C22.268 47.4625 22.2949 47.1659 22.3217 46.8704C22.3229 46.858 22.324 46.8457 22.3251 46.8334C22.3367 46.6963 22.312 46.6256 22.1712 46.5673C21.3663 46.2268 20.5866 45.8296 19.8379 45.3787C17.6278 44.0699 15.7174 42.4219 14.1715 40.3628C14.0547 40.2117 13.9542 40.0487 13.8719 39.8764C13.7129 39.5315 13.8799 39.043 14.2051 38.8476C14.5543 38.6376 14.9233 38.7061 15.2048 39.0357C15.3105 39.1604 15.4111 39.2902 15.511 39.42C17.4032 41.8773 19.8445 43.6273 22.6459 44.904C22.7626 44.9573 22.8326 44.9485 22.923 44.8413C23.1581 44.5473 23.4823 44.3375 23.8469 44.2434C23.9905 44.2091 24.0138 44.1297 24.0051 44.0086C23.9399 43.0918 23.8765 42.1748 23.8148 41.2575C23.8144 41.1943 23.7932 41.1331 23.7544 41.0832C23.7156 41.0334 23.6615 40.9977 23.6004 40.9818C23.2263 40.8404 22.853 40.696 22.4884 40.5298C20.6562 39.7079 19.0065 38.5286 17.6358 37.0611C17.4448 36.8555 17.2617 36.7745 16.9701 36.8234C16.7494 36.8666 16.5213 36.8518 16.3081 36.7804C16.0949 36.7089 15.9039 36.5833 15.7538 36.4158C15.6262 36.2816 15.5416 36.2729 15.3892 36.3742C14.7122 36.8199 13.9894 37.1917 13.2331 37.4833C12.264 37.8661 11.2738 38.1709 10.2165 38.1709C10.0159 38.1752 9.81675 38.1354 9.6332 38.0542C9.32039 37.9084 9.1155 37.678 9.09727 37.3251C9.08458 37.1559 9.1196 36.9865 9.19835 36.8362C9.27711 36.6859 9.39644 36.5607 9.54279 36.4749C9.72349 36.356 9.92782 36.3192 10.1326 36.2822C10.1691 36.2756 10.2057 36.269 10.2421 36.2619C11.1192 36.0913 11.9541 35.8113 12.6359 35.2076C13.6021 34.3508 14.1796 33.2432 14.6134 32.0495C14.6444 31.9448 14.6444 31.8334 14.6134 31.7287C14.4939 31.1119 14.4208 30.4869 14.3947 29.8591C14.2838 27.7081 14.7753 25.6693 15.546 23.6824C15.9302 22.6919 16.366 21.7235 16.8017 20.7552C17.1574 19.9648 17.513 19.1743 17.8407 18.3718C17.8943 18.2407 17.9476 18.1095 18.0008 17.9782C18.3786 17.0473 18.7564 16.1163 19.2575 15.2408C19.4799 14.8523 19.4785 14.8514 19.1002 14.6226L19.089 14.6159C18.015 13.9648 17.2318 13.0562 16.7025 11.918C16.3663 11.1939 16.7017 10.2518 17.8101 10.4217C18.1414 10.4812 18.4764 10.5184 18.8127 10.5333ZM33.1354 45.825C32.0411 46.0469 30.9295 46.1718 29.8133 46.1983C29.1388 46.2012 28.667 46.1918 28.1975 46.1611C28.0217 46.1495 27.9422 46.0853 27.8919 45.9242C27.6272 45.0718 27.0745 44.5008 26.209 44.2558C26.1517 44.2482 26.0995 44.2191 26.0628 44.1744C26.0261 44.1298 26.0078 44.0729 26.0114 44.0152L26.0114 44.015C25.9625 43.2983 25.9137 42.5816 25.8452 41.8663C25.8218 41.6243 25.8896 41.5739 26.1208 41.6133C28.5057 42.0215 30.9521 41.8823 33.2754 41.2064C33.4671 41.1518 33.57 41.1707 33.656 41.3639C33.9943 42.1288 34.3429 42.8886 34.6958 43.6462C34.76 43.7848 34.7075 43.8387 34.5966 43.8985C33.9214 44.2638 33.5211 44.8311 33.3811 45.5836C33.3748 45.6462 33.3468 45.7047 33.3019 45.7488C33.257 45.7929 33.1981 45.8198 33.1354 45.825Z"
				fill="#1D1842"
			/>
			<path
				d="M40.9961 32.0045C41.1216 31.968 41.142 31.8513 41.1835 31.7536C41.9003 30.0364 42.1015 28.2471 41.9331 26.4059C41.9003 26.045 41.7661 25.0694 41.2178 23.3434C40.6775 21.8895 39.8987 20.5726 38.9501 19.3461C38.7751 19.1201 38.6366 19.061 38.3442 19.1857C37.5421 19.5292 36.721 19.5875 35.9379 19.096C35.5113 18.8284 35.3167 18.407 35.2649 17.9294C35.1475 16.8626 35.5711 16.0335 36.441 15.4225C36.7327 15.2154 36.7444 15.2169 36.5431 14.9237C36.1927 14.392 35.7975 13.8912 35.3619 13.4268C35.2095 13.4997 35.2459 13.6375 35.2503 13.7593C35.2707 14.4097 34.8653 14.7385 34.2338 14.5686C33.7679 14.4432 33.3355 14.2267 32.8893 14.0495C31.8378 13.6317 30.7492 13.5011 29.6306 13.5835C29.4607 13.5959 29.3098 13.5332 29.1472 13.542C29.1182 13.5463 29.0895 13.5522 29.0611 13.5595C28.8759 13.5595 28.7279 13.7381 28.5288 13.6674C27.5262 13.8589 26.5773 14.2662 25.7478 14.861C25.1039 15.3194 24.527 15.8652 24.0335 16.4827C23.4033 17.2939 22.9066 18.2005 22.5621 19.1682C22.1247 20.3357 21.9432 21.5835 22.0298 22.8272C22.7699 23.8713 23.4101 24.9753 23.7936 26.1981C24.8422 29.5421 24.5425 32.7322 22.6095 35.7072C22.3594 36.0922 22.1042 36.4874 21.7002 36.7455C21.7542 36.9169 21.9 36.8811 22.0196 36.8738C23.5068 36.7791 24.9417 36.2887 26.1758 35.4534C26.9504 34.9258 27.6739 34.327 28.3371 33.6648C29.0662 32.9531 29.7619 32.2064 30.5049 31.5079C31.1859 30.8684 31.8662 30.226 32.6924 29.7579C33.5551 29.2632 34.5186 28.9703 35.5106 28.9011C36.6977 28.8037 37.8847 29.0899 38.8969 29.7178C39.6027 30.1553 40.1153 30.7751 40.501 31.5043C40.5739 31.6413 40.6527 31.774 40.7373 31.9038C40.7598 31.9502 40.799 31.9863 40.847 32.0049C40.895 32.0236 40.9483 32.0234 40.9961 32.0045Z"
				fill="#FFA14A"
			/>
			<path
				d="M40.9955 32.0043C40.8387 31.9095 40.7768 31.7396 40.7038 31.5909C39.7115 29.6221 38.0438 28.7727 35.914 28.7522C34.0451 28.7347 32.5029 29.5171 31.1262 30.7487C29.8137 31.9256 28.6675 33.2753 27.3236 34.4201C26.13 35.4358 24.8168 36.2189 23.2717 36.566C22.7547 36.672 22.2293 36.7321 21.7018 36.7454C21.4932 36.7454 21.2847 36.7534 21.0754 36.7512C20.88 36.7512 20.6664 36.7417 20.5883 36.9605C20.5103 37.1792 20.7174 37.2828 20.861 37.3776C21.8817 38.0635 22.9839 38.6193 24.1423 39.032C26.7379 39.9493 29.5488 40.0685 32.2128 39.3745C34.8768 38.6804 37.2721 37.2047 39.0902 35.1376C39.843 34.2829 40.4703 33.3253 40.9532 32.2938C40.9933 32.1954 40.9715 32.0991 40.9955 32.0043Z"
				fill="white"
			/>
			<path
				d="M39.7832 16.0815C38.8134 16.7254 37.802 17.1906 36.7666 17.6325C37.7568 18.0977 39.6286 17.1585 39.7832 16.0815Z"
				fill="white"
			/>
			<path
				d="M18.9736 11.8999C19.2653 11.8794 19.557 11.9487 19.8435 11.8532C19.5533 11.8714 19.2602 11.816 18.9736 11.8999Z"
				fill="white"
			/>
			<path
				d="M16.2917 33.0979C16.2832 33.194 16.3067 33.2902 16.3585 33.3716C16.4104 33.453 16.4876 33.5149 16.5783 33.5478C16.6668 33.5868 16.7651 33.5977 16.8599 33.5789C16.9548 33.5601 17.0415 33.5126 17.1084 33.4428C17.2255 33.3269 17.3145 33.1857 17.3687 33.0301C17.6888 32.228 18.0009 31.4216 18.321 30.618C18.4019 30.4054 18.4971 30.1986 18.6061 29.999C18.8008 29.6592 19.1515 29.5323 19.4644 29.665C19.7655 29.7934 19.9019 30.1105 19.7852 30.4941C19.5212 31.3764 19.1523 32.2193 18.7899 33.0644C18.7286 33.2066 18.663 33.3473 18.6127 33.4931C18.5441 33.6922 18.5755 33.8781 18.7585 34.0036C18.8405 34.0629 18.9391 34.0949 19.0403 34.0949C19.1416 34.0949 19.2402 34.0629 19.3222 34.0036C19.4559 33.9067 19.5586 33.7729 19.6175 33.6186C19.9988 32.8019 20.3184 31.9579 20.5734 31.0935C20.607 30.9804 20.6194 30.8747 20.7681 30.8324C21.603 30.6064 21.9129 29.9611 22.0303 29.1881C22.1951 28.1031 21.9508 27.0736 21.5789 26.0607C21.2297 25.1128 20.6857 24.2728 20.1024 23.4562C19.7819 23.0251 19.4835 22.578 19.2084 22.1167C18.9796 21.7402 18.879 21.2996 18.9219 20.8611L19.1362 20.4236C19.6219 19.8971 20.152 19.9474 20.499 20.576C20.9365 21.378 21.5031 22.089 22.0303 22.8291C22.1375 22.7102 22.1353 22.5615 22.1367 22.4171C22.1396 20.8215 22.5428 19.252 23.3092 17.8525C24.0596 16.4671 25.0804 15.3734 26.4527 14.5902C27.1089 14.2154 27.8097 13.9938 28.5323 13.8137C28.7036 13.7145 28.9063 13.7743 29.0835 13.7065H29.1324C29.7886 13.7203 30.4449 13.6627 31.096 13.7422C32.0184 13.8545 32.8774 14.1695 33.721 14.5406C33.9121 14.6261 34.1109 14.6935 34.3146 14.7419C34.946 14.8877 35.4652 14.4313 35.3937 13.7838C35.3813 13.6664 35.3733 13.5482 35.3631 13.4309C33.7502 11.5299 31.6888 10.434 29.2417 10.0446C27.3328 9.74054 25.4902 10.0599 23.6848 10.6819C23.3376 10.7908 22.998 10.9225 22.6683 11.0764C22.1462 11.3294 21.5746 11.441 21.043 11.6772C20.6369 11.6911 20.2548 11.8682 19.845 11.8559C19.5577 11.9156 19.2616 11.8311 18.9751 11.9025C19.5307 12.6084 20.2497 13.0269 21.1502 13.0896C21.3988 13.1071 21.6526 13.0313 21.8932 12.9438C22.1003 12.8751 22.3184 12.8455 22.5363 12.8563C23.0008 12.8716 23.3275 13.1618 23.4667 13.635C23.5871 14.0485 23.4266 14.5603 23.0737 14.7959C22.4306 15.2253 21.7167 15.4149 20.9475 15.3063C20.6638 15.2669 20.4713 15.2975 20.3707 15.5899C20.327 15.6908 20.2758 15.7883 20.2176 15.8816C20.1279 16.0544 20.1337 16.2265 20.2832 16.3548C20.51 16.5488 20.5078 16.7748 20.413 17.0213C20.2205 17.5222 20.0265 18.0224 19.8297 18.5204C19.5825 19.1358 19.3273 19.7491 19.0757 20.3638C18.9801 20.5168 18.9103 20.6846 18.8694 20.8603C18.0374 22.7518 17.1806 24.6338 16.6512 26.6397C16.4765 27.2918 16.3926 27.9648 16.4019 28.6398C16.4981 28.4692 16.5892 28.2956 16.6935 28.1294C16.8204 27.9216 16.9852 27.7517 17.2324 27.6977C17.3326 27.6727 17.4377 27.6738 17.5374 27.7008C17.6372 27.7278 17.7284 27.7799 17.8023 27.8521C17.8763 27.9243 17.9305 28.0142 17.9599 28.1133C17.9893 28.2123 17.9929 28.3173 17.9703 28.4181C17.9258 28.6631 17.8019 28.879 17.691 29.0977C17.1354 30.1878 16.6753 31.3144 16.3931 32.5088C16.3383 32.701 16.3043 32.8985 16.2917 33.0979Z"
				fill="#3393FE"
			/>
			<path
				d="M27.8799 18.1438C27.8799 19.395 28.8424 20.375 30.0564 20.367C30.3462 20.3684 30.6334 20.312 30.9012 20.2011C31.1689 20.0903 31.4119 19.9272 31.6159 19.7213C31.8199 19.5155 31.9808 19.2711 32.0893 19.0023C32.1978 18.7336 32.2516 18.4459 32.2476 18.1562C32.2388 16.9275 31.2756 15.9475 30.0769 15.9482C28.8905 15.949 27.8784 16.9611 27.8799 18.1438Z"
				fill="#1D1842"
			/>
			<path
				d="M30.5975 18.2471C30.6929 18.2465 30.7873 18.2269 30.8751 18.1895C30.9629 18.152 31.0425 18.0976 31.1091 18.0292C31.1757 17.9608 31.228 17.8799 31.2631 17.7912C31.2982 17.7024 31.3154 17.6076 31.3135 17.5121C31.3041 17.1475 30.9912 16.8653 30.6033 16.8763C30.4202 16.8819 30.246 16.9568 30.1161 17.086C29.9861 17.2151 29.9101 17.3888 29.9033 17.5719C29.9026 17.9708 30.1921 18.2522 30.5975 18.2471Z"
				fill="white"
			/>
			<path
				d="M136.712 37.1439C135.672 37.1439 134.744 36.8879 133.928 36.3759C133.112 35.8639 132.464 35.1279 131.984 34.1679C131.52 33.2079 131.288 32.0639 131.288 30.7359C131.288 29.4079 131.52 28.2639 131.984 27.3039C132.448 26.3439 133.088 25.6079 133.904 25.0959C134.736 24.5839 135.672 24.3279 136.712 24.3279C137.592 24.3279 138.4 24.5279 139.136 24.9279C139.872 25.3119 140.368 25.8159 140.624 26.4399H140.264V19.1919H145.256V36.8559H140.336V34.8879H140.672C140.448 35.5599 139.96 36.1039 139.208 36.5199C138.456 36.9359 137.624 37.1439 136.712 37.1439ZM138.368 33.4719C138.944 33.4719 139.424 33.2639 139.808 32.8479C140.192 32.4319 140.384 31.7279 140.384 30.7359C140.384 29.7439 140.192 29.0399 139.808 28.6239C139.424 28.2079 138.944 27.9999 138.368 27.9999C137.792 27.9999 137.304 28.2079 136.904 28.6239C136.52 29.0399 136.328 29.7439 136.328 30.7359C136.328 31.7279 136.52 32.4319 136.904 32.8479C137.304 33.2639 137.792 33.4719 138.368 33.4719Z"
				fill="#1D1842"
			/>
			<path
				d="M121.245 36.8559V28.0959C121.245 27.5199 121.229 26.9439 121.197 26.3679C121.165 25.7759 121.117 25.1919 121.053 24.6159H125.853L126.405 28.6239H125.661C125.821 27.6479 126.061 26.8479 126.381 26.2239C126.717 25.5839 127.149 25.1119 127.677 24.8079C128.205 24.4879 128.845 24.3279 129.597 24.3279C129.965 24.3279 130.229 24.3439 130.389 24.3759C130.565 24.4079 130.749 24.4639 130.941 24.5439V28.9119C130.509 28.7199 130.165 28.5999 129.909 28.5519C129.653 28.4879 129.317 28.4559 128.901 28.4559C128.245 28.4559 127.725 28.5599 127.341 28.7679C126.957 28.9599 126.685 29.2879 126.525 29.7519C126.365 30.2159 126.285 30.8479 126.285 31.6479V36.8559H121.245Z"
				fill="#1D1842"
			/>
			<path
				d="M113.956 36.856V24.616H118.948V36.856H113.956ZM113.884 23.224V18.856H119.02V23.224H113.884Z"
				fill="#1D1842"
			/>
			<path
				d="M97.2041 36.856V19.936H105.868C107.772 19.936 109.236 20.336 110.26 21.136C111.3 21.92 111.82 22.976 111.82 24.304C111.82 25.28 111.532 26.12 110.956 26.824C110.396 27.528 109.62 28.008 108.628 28.264V27.856C109.812 28.096 110.724 28.576 111.364 29.296C112.004 30 112.324 30.904 112.324 32.008C112.324 33.48 111.764 34.656 110.644 35.536C109.524 36.416 108.012 36.856 106.108 36.856H97.2041ZM102.148 33.112H105.412C106.116 33.112 106.628 32.992 106.948 32.752C107.268 32.496 107.428 32.12 107.428 31.624C107.428 31.112 107.268 30.736 106.948 30.496C106.628 30.256 106.116 30.136 105.412 30.136H102.148V33.112ZM102.148 26.392H104.884C105.588 26.392 106.092 26.288 106.396 26.08C106.716 25.856 106.876 25.504 106.876 25.024C106.876 24.544 106.716 24.2 106.396 23.992C106.092 23.784 105.588 23.68 104.884 23.68H102.148V26.392Z"
				fill="#1D1842"
			/>
			<path
				d="M83.6285 36.856L75.8525 19.936H81.4205L86.5565 32.032H85.0445L90.1565 19.936H95.5085L87.7565 36.856H83.6285Z"
				fill="#1D1842"
			/>
			<path
				d="M69.8275 37.1439C67.9395 37.1439 66.2995 36.7839 64.9075 36.0639C63.5315 35.3279 62.4595 34.3039 61.6915 32.9919C60.9395 31.6799 60.5635 30.1439 60.5635 28.3839C60.5635 26.6239 60.9395 25.0959 61.6915 23.7999C62.4595 22.4879 63.5315 21.4719 64.9075 20.7519C66.2995 20.0159 67.9395 19.6479 69.8275 19.6479C70.9795 19.6479 72.0355 19.7999 72.9955 20.1039C73.9715 20.3919 74.7795 20.8079 75.4195 21.3519L73.9075 25.4079C73.1875 24.9279 72.5395 24.5999 71.9635 24.4239C71.3875 24.2319 70.7395 24.1359 70.0195 24.1359C68.7235 24.1359 67.7235 24.5039 67.0195 25.2399C66.3315 25.9599 65.9875 27.0079 65.9875 28.3839C65.9875 29.7759 66.3315 30.8399 67.0195 31.5759C67.7235 32.2959 68.7235 32.6559 70.0195 32.6559C70.7395 32.6559 71.3875 32.5679 71.9635 32.3919C72.5395 32.1999 73.1875 31.8639 73.9075 31.3839L75.4195 35.4399C74.7795 35.9839 73.9715 36.4079 72.9955 36.712C72.0355 37 70.9795 37.1439 69.8275 37.1439Z"
				fill="#1D1842"
			/>
		</svg>
		<Chip  label="demo"  theme="error" variant="filled"  />
		</div>
	);
}
