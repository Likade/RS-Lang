export const headerContent = () => `<div class="header">
<div class="header-container container">
	<a href="#/" class="logo-link">
		<svg class="logo" width="221" height="82" viewBox="0 0 221 82" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<path d="M91.0938 51.584H105.814V64H78.2938V19.2H91.0938V51.584ZM130.54 32H142.38V64H130.54V61.12C128.492 63.6373 125.634 64.896 121.964 64.896C117.655 64.896 114.135 63.296 111.404 60.096C108.674 56.896 107.308 52.864 107.308 48C107.308 43.136 108.674 39.104 111.404 35.904C114.135 32.704 117.655 31.104 121.964 31.104C125.634 31.104 128.492 32.3627 130.54 34.88V32ZM120.684 52.288C121.751 53.44 123.138 54.016 124.844 54.016C126.551 54.016 127.916 53.44 128.94 52.288C130.007 51.136 130.54 49.7067 130.54 48C130.54 46.2933 130.007 44.864 128.94 43.712C127.916 42.56 126.551 41.984 124.844 41.984C123.138 41.984 121.751 42.56 120.684 43.712C119.66 44.864 119.148 46.2933 119.148 48C119.148 49.7067 119.66 51.136 120.684 52.288ZM167.945 31.104C171.443 31.104 174.238 32.32 176.329 34.752C178.462 37.1413 179.529 40.7253 179.529 45.504V64H167.689V46.784C167.689 43.9253 166.366 42.496 163.721 42.496C162.313 42.496 161.225 42.944 160.457 43.84C159.731 44.736 159.369 45.9733 159.369 47.552V64H147.529V32H159.369V35.136C161.331 32.448 164.19 31.104 167.945 31.104ZM206.488 32H218.328V63.04C218.328 65.6 217.838 67.8613 216.856 69.824C215.918 71.7867 214.638 73.3227 213.016 74.432C211.395 75.584 209.603 76.4373 207.64 76.992C205.72 77.5467 203.694 77.824 201.56 77.824C197.806 77.824 194.478 77.1413 191.576 75.776C188.675 74.4107 186.52 72.4907 185.112 70.016L194.712 64.448C196.248 66.5387 198.318 67.584 200.92 67.584C202.414 67.584 203.715 67.2 204.824 66.432C205.934 65.7067 206.488 64.576 206.488 63.04V59.84C204.44 62.3573 201.582 63.616 197.912 63.616C193.646 63.616 190.126 62.0587 187.352 58.944C184.622 55.8293 183.256 51.968 183.256 47.36C183.256 42.752 184.622 38.8907 187.352 35.776C190.126 32.6613 193.646 31.104 197.912 31.104C201.582 31.104 204.44 32.3627 206.488 34.88V32ZM196.632 51.456C197.699 52.5653 199.086 53.12 200.792 53.12C202.499 53.12 203.864 52.5653 204.888 51.456C205.955 50.3467 206.488 48.9813 206.488 47.36C206.488 45.7387 205.955 44.3733 204.888 43.264C203.864 42.1547 202.499 41.6 200.792 41.6C199.086 41.6 197.699 42.1547 196.632 43.264C195.608 44.3733 195.096 45.7387 195.096 47.36C195.096 48.9813 195.608 50.3467 196.632 51.456Z" fill="black"/>
			<mask id="mask0_75_14" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="18" width="74" height="48">
			<path d="M26.3978 63.936L19.2938 49.856H16.0938V63.936H3.29375V19.136H21.2138C26.1204 19.136 30.1738 20.5867 33.3738 23.488C36.5738 26.3467 38.1738 30.144 38.1738 34.88C38.1738 37.5253 37.5551 39.9147 36.3178 42.048C35.1231 44.1813 33.4378 45.9093 31.2618 47.232L40.0938 63.936H26.3978ZM16.0938 30.912V39.232H20.9578C22.3231 39.2747 23.3898 38.9333 24.1578 38.208C24.9684 37.4827 25.3738 36.4587 25.3738 35.136C25.3738 33.8133 24.9684 32.7893 24.1578 32.064C23.3898 31.296 22.3231 30.912 20.9578 30.912H16.0938ZM58.7968 65.024C53.9328 65.024 49.8794 64.0213 46.6368 62.016C43.3941 59.968 41.2181 57.216 40.1088 53.76L51.0528 47.424C52.5461 51.2213 55.2341 53.12 59.1168 53.12C62.0181 53.12 63.4688 52.352 63.4688 50.816C63.4688 50.3893 63.3621 50.0053 63.1488 49.664C62.9354 49.3227 62.5301 49.024 61.9328 48.768C61.3354 48.512 60.8021 48.32 60.3328 48.192C59.9061 48.0213 59.1381 47.7867 58.0288 47.488C56.9194 47.1893 56.0874 46.9547 55.5328 46.784C46.6154 44.096 42.1568 39.296 42.1568 32.384C42.1568 28.288 43.6288 24.896 46.5728 22.208C49.5594 19.52 53.4634 18.176 58.2847 18.176C62.0821 18.176 65.4741 19.072 68.4608 20.864C71.4901 22.656 73.7088 25.2373 75.1168 28.608L64.4928 34.816C63.2554 31.6587 61.2074 30.08 58.3488 30.08C57.2394 30.08 56.3861 30.3147 55.7888 30.784C55.2341 31.2107 54.9568 31.7653 54.9568 32.448C54.9568 33.3867 55.4474 34.112 56.4288 34.624C57.4528 35.136 59.3941 35.7973 62.2528 36.608C64.3861 37.248 66.1354 37.8667 67.5008 38.464C68.8661 39.0187 70.2954 39.8293 71.7887 40.896C73.2821 41.92 74.3914 43.264 75.1168 44.928C75.8848 46.5493 76.2688 48.4693 76.2688 50.688C76.2688 55.2533 74.6901 58.7947 71.5328 61.312C68.4181 63.7867 64.1728 65.024 58.7968 65.024Z" fill="white"/>
			<path d="M26.3978 63.936L25.505 64.3865L25.7822 64.936H26.3978V63.936ZM19.2938 49.856L20.1865 49.4055L19.9093 48.856H19.2938V49.856ZM16.0938 49.856V48.856H15.0938V49.856H16.0938ZM16.0938 63.936V64.936H17.0938V63.936H16.0938ZM3.29375 63.936H2.29375V64.936H3.29375V63.936ZM3.29375 19.136V18.136H2.29375V19.136H3.29375ZM33.3738 23.488L32.702 24.2289L32.7075 24.2338L33.3738 23.488ZM36.3178 42.048L35.4527 41.5463L35.4489 41.5528L35.4452 41.5594L36.3178 42.048ZM31.2618 47.232L30.7423 46.3775L29.9374 46.8667L30.3777 47.6994L31.2618 47.232ZM40.0938 63.936V64.936H41.7537L40.9778 63.4686L40.0938 63.936ZM16.0938 30.912V29.912H15.0938V30.912H16.0938ZM16.0938 39.232H15.0938V40.232H16.0938V39.232ZM20.9578 39.232L20.989 38.2325L20.9734 38.232H20.9578V39.232ZM24.1578 38.208L23.491 37.4628L23.4809 37.4717L23.4711 37.481L24.1578 38.208ZM24.1578 32.064L23.4506 32.7711L23.4703 32.7907L23.491 32.8092L24.1578 32.064ZM27.2905 63.4855L20.1865 49.4055L18.401 50.3065L25.505 64.3865L27.2905 63.4855ZM19.2938 48.856H16.0938V50.856H19.2938V48.856ZM15.0938 49.856V63.936H17.0938V49.856H15.0938ZM16.0938 62.936H3.29375V64.936H16.0938V62.936ZM4.29375 63.936V19.136H2.29375V63.936H4.29375ZM3.29375 20.136H21.2138V18.136H3.29375V20.136ZM21.2138 20.136C25.9083 20.136 29.7112 21.5171 32.7021 24.2288L34.0454 22.7472C30.6363 19.6562 26.3325 18.136 21.2138 18.136V20.136ZM32.7075 24.2338C35.6717 26.8818 37.1738 30.3957 37.1738 34.88H39.1738C39.1738 29.8922 37.4758 25.8116 34.04 22.7422L32.7075 24.2338ZM37.1738 34.88C37.1738 37.3624 36.5952 39.5764 35.4527 41.5463L37.1828 42.5497C38.5149 40.2529 39.1738 37.6883 39.1738 34.88H37.1738ZM35.4452 41.5594C34.3383 43.536 32.7774 45.1405 30.7423 46.3775L31.7812 48.0865C34.0981 46.6782 35.9078 44.8267 37.1903 42.5366L35.4452 41.5594ZM30.3777 47.6994L39.2097 64.4034L40.9778 63.4686L32.1458 46.7646L30.3777 47.6994ZM40.0938 62.936H26.3978V64.936H40.0938V62.936ZM15.0938 30.912V39.232H17.0938V30.912H15.0938ZM16.0938 40.232H20.9578V38.232H16.0938V40.232ZM20.9265 40.2315C22.4764 40.2799 23.8307 39.8923 24.8444 38.935L23.4711 37.481C22.9488 37.9743 22.1698 38.2694 20.989 38.2325L20.9265 40.2315ZM24.8245 38.9532C25.8923 37.9979 26.3738 36.6765 26.3738 35.136H24.3738C24.3738 36.2408 24.0445 36.9675 23.491 37.4628L24.8245 38.9532ZM26.3738 35.136C26.3738 33.5955 25.8923 32.2741 24.8245 31.3188L23.491 32.8092C24.0445 33.3045 24.3738 34.0312 24.3738 35.136H26.3738ZM24.8649 31.3569C23.864 30.356 22.5164 29.912 20.9578 29.912V31.912C22.1297 31.912 22.9155 32.236 23.4506 32.7711L24.8649 31.3569ZM20.9578 29.912H16.0938V31.912H20.9578V29.912ZM46.6367 62.016L46.1027 62.8615L46.1108 62.8665L46.6367 62.016ZM40.1087 53.76L39.6077 52.8946L38.9103 53.2983L39.1566 54.0656L40.1087 53.76ZM51.0527 47.424L51.9834 47.058L51.5579 45.9761L50.5517 46.5586L51.0527 47.424ZM63.1488 49.664L62.3008 50.194L62.3008 50.194L63.1488 49.664ZM61.9328 48.768L61.5388 49.6871L61.9328 48.768ZM60.3327 48.192L59.9614 49.1205L60.0145 49.1417L60.0696 49.1568L60.3327 48.192ZM58.0288 47.488L58.2887 46.5224L58.0288 47.488ZM55.5328 46.784L55.8268 45.8282L55.8214 45.8265L55.5328 46.784ZM46.5728 22.208L45.9038 21.4647L45.8985 21.4695L46.5728 22.208ZM68.4608 20.864L67.9462 21.7215L67.9516 21.7247L68.4608 20.864ZM75.1168 28.608L75.6213 29.4714L76.3767 29.0299L76.0395 28.2226L75.1168 28.608ZM64.4928 34.816L63.5617 35.1809L63.9882 36.2691L64.9973 35.6794L64.4928 34.816ZM55.7887 30.784L56.3985 31.5767L56.4066 31.5703L55.7887 30.784ZM56.4287 34.624L55.9662 35.5106L55.9738 35.5146L55.9815 35.5184L56.4287 34.624ZM62.2528 36.608L62.5401 35.6502L62.5329 35.648L62.5256 35.6459L62.2528 36.608ZM67.5007 38.464L67.0999 39.3802L67.1121 39.3855L67.1244 39.3905L67.5007 38.464ZM71.7887 40.896L71.2075 41.7097L71.2153 41.7153L71.2232 41.7207L71.7887 40.896ZM75.1168 44.928L74.2001 45.3276L74.2063 45.3419L74.213 45.3561L75.1168 44.928ZM71.5328 61.312L72.1548 62.095L72.1562 62.0939L71.5328 61.312ZM58.7968 64.024C54.068 64.024 50.2092 63.0495 47.1627 61.1655L46.1108 62.8665C49.5496 64.9931 53.7975 66.024 58.7968 66.024V64.024ZM47.1707 61.1705C44.1143 59.2401 42.0942 56.6736 41.0609 53.4544L39.1566 54.0656C40.3419 57.7584 42.6738 60.6959 46.1028 62.8615L47.1707 61.1705ZM40.6098 54.6254L51.5538 48.2894L50.5517 46.5586L39.6077 52.8946L40.6098 54.6254ZM50.1221 47.79C50.923 49.8265 52.074 51.4266 53.6118 52.5128C55.1533 53.6016 57.0069 54.12 59.1168 54.12V52.12C57.3439 52.12 55.9122 51.6891 54.7657 50.8792C53.6155 50.0668 52.6758 48.8188 51.9834 47.058L50.1221 47.79ZM59.1168 54.12C60.623 54.12 61.9073 53.9262 62.8486 53.4278C63.3342 53.1707 63.751 52.8206 64.043 52.3568C64.3373 51.8894 64.4688 51.3637 64.4688 50.816H62.4688C62.4688 51.0363 62.4189 51.1826 62.3505 51.2912C62.2799 51.4034 62.1527 51.5333 61.9129 51.6602C61.4036 51.9298 60.5118 52.12 59.1168 52.12V54.12ZM64.4688 50.816C64.4688 50.2137 64.3155 49.6439 63.9967 49.134L62.3008 50.194C62.4087 50.3667 62.4688 50.565 62.4688 50.816H64.4688ZM63.9967 49.134C63.6273 48.5429 63.0061 48.14 62.3267 47.8489L61.5388 49.6871C62.0541 49.908 62.2435 50.1025 62.3008 50.194L63.9967 49.134ZM62.3267 47.8489C61.7 47.5803 61.1217 47.3707 60.5959 47.2272L60.0696 49.1568C60.4824 49.2693 60.9708 49.4437 61.5388 49.6871L62.3267 47.8489ZM60.7041 47.2635C60.2165 47.0685 59.3964 46.8206 58.2887 46.5224L57.7688 48.4536C58.8797 48.7527 59.5956 48.9742 59.9614 49.1205L60.7041 47.2635ZM58.2887 46.5224C57.1821 46.2244 56.364 45.9935 55.8268 45.8282L55.2387 47.7398C55.8109 47.9158 56.6568 48.1542 57.7688 48.4536L58.2887 46.5224ZM55.8214 45.8265C51.4649 44.5134 48.3015 42.7138 46.2334 40.4874C44.186 38.2833 43.1567 35.6028 43.1567 32.384H41.1567C41.1567 36.0772 42.3568 39.2527 44.7681 41.8486C47.1587 44.4222 50.6833 46.3666 55.2441 47.7414L55.8214 45.8265ZM43.1567 32.384C43.1567 28.5602 44.5169 25.4392 47.247 22.9465L45.8985 21.4695C42.7406 24.3528 41.1567 28.0158 41.1567 32.384H43.1567ZM47.2417 22.9513C50.0094 20.4603 53.6584 19.176 58.2848 19.176V17.176C53.2684 17.176 49.1094 18.5797 45.9038 21.4647L47.2417 22.9513ZM58.2848 19.176C61.9177 19.176 65.1289 20.0311 67.9463 21.7215L68.9752 20.0065C65.8193 18.1129 62.2464 17.176 58.2848 17.176V19.176ZM67.9516 21.7247C70.7881 23.4026 72.8657 25.8135 74.194 28.9934L76.0395 28.2226C74.5518 24.6611 72.1921 21.9094 68.9699 20.0033L67.9516 21.7247ZM74.6122 27.7446L63.9882 33.9526L64.9973 35.6794L75.6213 29.4714L74.6122 27.7446ZM65.4238 34.4511C64.7591 32.7549 63.845 31.4014 62.6393 30.472C61.4217 29.5335 59.9743 29.08 58.3488 29.08V31.08C59.5818 31.08 60.5878 31.4158 61.4182 32.056C62.2605 32.7053 62.9891 33.7197 63.5617 35.1809L65.4238 34.4511ZM58.3488 29.08C57.115 29.08 56.0094 29.3389 55.1709 29.9977L56.4066 31.5703C56.7628 31.2904 57.3639 31.08 58.3488 31.08V29.08ZM55.179 29.9914C54.3855 30.6018 53.9567 31.4459 53.9567 32.448H55.9567C55.9567 32.0848 56.0827 31.8196 56.3985 31.5766L55.179 29.9914ZM53.9567 32.448C53.9567 33.8337 54.7262 34.8636 55.9662 35.5106L56.8913 33.7374C56.1687 33.3604 55.9567 32.9397 55.9567 32.448H53.9567ZM55.9815 35.5184C57.1002 36.0778 59.1267 36.7609 61.9799 37.5701L62.5256 35.6459C59.6615 34.8337 57.8053 34.1942 56.876 33.7296L55.9815 35.5184ZM61.9654 37.5658C64.077 38.1993 65.7848 38.8048 67.0999 39.3802L67.9016 37.5478C66.4861 36.9286 64.6952 36.2967 62.5401 35.6502L61.9654 37.5658ZM67.1244 39.3905C68.4021 39.9096 69.763 40.6779 71.2075 41.7097L72.37 40.0823C70.8278 38.9807 69.33 38.1278 67.8771 37.5375L67.1244 39.3905ZM71.2232 41.7207C72.5616 42.6384 73.5494 43.835 74.2001 45.3276L76.0334 44.5284C75.2334 42.693 74.0026 41.2016 72.3543 40.0713L71.2232 41.7207ZM74.213 45.3561C74.9044 46.8158 75.2688 48.5832 75.2688 50.688H77.2688C77.2688 48.3555 76.8651 46.2829 76.0205 44.4999L74.213 45.3561ZM75.2688 50.688C75.2688 54.994 73.7956 58.2289 70.9093 60.5301L72.1562 62.0939C75.5846 59.3604 77.2688 55.5127 77.2688 50.688H75.2688ZM70.9107 60.529C68.0262 62.8208 64.0258 64.024 58.7968 64.024V66.024C64.3196 66.024 68.81 64.7525 72.1548 62.095L70.9107 60.529Z" fill="black"/>
			</mask>
			<g mask="url(#mask0_75_14)">
			<rect x="-1.5" y="2.5" width="79" height="79" fill="url(#pattern0)" stroke="black"/>
			</g>
			<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use xlink:href="#image0_75_14" transform="scale(0.0125)"/>
			</pattern>
			<image id="image0_75_14" width="80" height="80" xlink:href="data:image/png;base64,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"/>
			</defs>
		</svg>
	</a>
	<button class="login btn" onclick="(() => {document.location.href = '#/authentication'})()">Войти</button>
</div>
</div>`;
