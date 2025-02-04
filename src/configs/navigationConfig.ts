import i18n from '@i18n';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
// import SettingsAppNavigation from '../app/(control-panel)/apps/settings/SettingsAppNavigation';

i18n.addResourceBundle('en', 'navigation', en);
i18n.addResourceBundle('tr', 'navigation', tr);
i18n.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'dashboards',
		title: 'Dashboards',
		subtitle: 'Unique dashboard designs',
		type: 'group',
		icon: 'heroicons-outline:home',
		translate: 'DASHBOARDS',
		children: [
			{
				id: 'dashboards.project',
				title: 'Project',
				type: 'item',
				icon: 'heroicons-outline:clipboard-document-check',
				url: '/dashboards/project'
			}
		]
	},
	{
		id: 'member',
		title: 'Members',
		subtitle: 'Custom made page designs',
		type: 'collapse',
		icon: 'heroicons-outline:user-group',
		children: [
			{
				id: 'members.members',
				title: 'Members',
				type: 'item',
				icon: 'heroicons-outline:users',
				url: '/pages/members'
			}
		]
	},
	{
		id: 'companies',
		title: 'Companies',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:building-office-2',
		url: '/pages/companies'
	},
	{
		id: 'abilities',
		title: 'Abilities',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:light-bulb',
		url: '/pages/abilities'
	},
	{
		id: 'announcements',
		title: 'Announcements',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:speaker-wave',
		url: '/pages/announcements'
	},
	{
		id: 'letters',
		title: 'Letters',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:envelope',
		url: '/pages/letters'
	},
	{
		id: 'events',
		title: 'Events',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:calendar',
		url: '/pages/events'
	},
	{
		id: 'regions',
		title: 'Regions',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:map-pin',
		url: '/pages/regions'
	},
	{
		id: 'principals',
		title: 'Principals',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:building-office',
		url: '/pages/principals'
	},
	{
		id: 'agreements',
		title: 'Agreements',
		subtitle: 'Custom made page designs',
		type: 'item',
		icon: 'heroicons-outline:pencil',
		url: '/pages/agreements'
	},
	{
		id: 'finances',
		title: 'Finances',
		subtitle: 'Custom made page designs',
		type: 'collapse',
		icon: 'heroicons-outline:banknotes',
		children: [
			{
				id: 'finances.incomes',
				title: 'Incomes',
				subtitle: 'Custom made page designs',
				type: 'item',
				icon: 'heroicons-outline:arrow-left-end-on-rectangle',
				url: '/pages/finances'
			},
			{
				id: 'finances.outcomes',
				title: 'Outcomes',
				subtitle: 'Custom made page designs',
				type: 'item',
				icon: 'heroicons-outline:arrow-left-start-on-rectangle',
				url: '/pages/finances'
			},
			{
				id: 'finances.reports',
				title: 'Reports',
				subtitle: 'Custom made page designs',
				type: 'item',
				icon: 'heroicons-outline:document-currency-dollar',
				url: '/pages/finances'
			}
		]
	}
];

export default navigationConfig;
