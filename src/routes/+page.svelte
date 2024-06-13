<!-- src/routes/+page.svelte -->

<script lang="ts">
    import Footer from "$lib/header/Footer.svelte";
    import Header from "$lib/header/Header.svelte";
	import "../app.css";

    let loggedIn = true;
	let heights: {stacksHeight:number; bitcoinHeight:number} = {stacksHeight:0, bitcoinHeight:0};
	let account = {stxAddress:'string', cardinal:'string',ordinal:'string',bnsNameInfo: {names: ['mikey']}};
	let balances = {sbtcBalance:102,cardinalBalance:10,ordinalBalance:7,stacksBalance:5}
	let headerLinks = [
		{name: '/dao-launch', href: '/dao-launcher', display: 'DAO Launcher', target:'_self'},
		{name: '/shop-front', href: 'http://localhost:8086/shop-front', display: 'Shop Front', target:'_self'},
	]

	const loginEvent = (e:any) => {
		console.log(e)
	}

	const logoutEvent = (e:any) => {
		console.log(e)
	}

	const networkSwitchEvent = async (e:any) => {
		console.log(e)
	}

	const copyEvent = async (e:any) => {
		console.log(e)
	}

</script>

<Header {headerLinks} {loggedIn} {heights} {account} {balances} on:do_login={loginEvent} on:do_logout={logoutEvent} on:do_copy={copyEvent} on:switch_network={networkSwitchEvent}/>
<Footer />