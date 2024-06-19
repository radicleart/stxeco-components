<script lang="ts">
    import Footer from "$lib/header/StxEcoFooter.svelte";
    import Header from "$lib/header/StxEcoHeader.svelte";
	import "../lib/app.css";

    let loggedIn = true;
	let heights: {stacksHeight:string; bitcoinHeight:string} = {stacksHeight:'0', bitcoinHeight:'0'};
	let account = {stxAddress:'string', cardinal:'string',ordinal:'string',bnsNameInfo: {names: ['mikey']}};
	let balances = {sbtcBalance:'102',cardinalBalance:'10',ordinalBalance:'7',stacksBalance:'5'}
	let headerLinks = [
            {name: '/voting', href: 'https://stx.eco', display: 'Voting', target:'_self',
                items: [
                    {name: '/edp015-sip-activation', href: 'https://stx.eco/dao/proposals/SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z.edp015-sip-activation/results', display: 'SIP 015', target:'_blank'},
                    {name: '/bdp001-sip-021-nakamoto', href: 'https://stx.eco/dao/proposals/SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z.bdp001-sip-021-nakamoto/results?method=1', display: 'SIP 021', target:'_blank'},
                ]
            },
            {name: '/insights', href: 'https://stx.eco/insights', display: 'Insights', target:'_self'},
            {name: '/dao-launcher', href: 'https://stx.eco/launcher', display: 'DAO', target:'_self'},
            {name: '/shop-front', href: 'https://stx.eco/shop-front', display: 'Shop Front', target:'_self'},
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