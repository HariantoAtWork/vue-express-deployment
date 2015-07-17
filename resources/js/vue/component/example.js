var component = {
	attached: function () {
		console.log(' attached example');

	},
	props: ['msg', 'list'],
	template: require('./example.html'),
	data: function() {
		return {
			filterQuery: ''
		}
	},
	filters: {
		filterGirls: function (list) {
			if (this.filterQuery == '')  return list;

			return list.filter(function(item){
				return item.name.toLowerCase().indexOf(this.filterQuery.toLowerCase()) > -1;
			}.bind(this))
		}
	},
	methods: {

	}
}
module.exports = component;