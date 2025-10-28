// Budget Report

document.addEventListener('DOMContentLoaded', () => {
    var budgetChart = echarts.init(document.querySelector("#budgetChart")).setOption({
        legend: {
            data: ['Receitas', 'Despesas'],
            textstyle: {
                color: '#fffffff',
            },
        },
        radar: {
            /* shape: 'circle', */
            indicator: [
                { name: 'Alimentação', max: 6500 },
                { name: 'Vendas', max: 16000 },
                { name: 'Marketing', max: 30000 },
                { name: 'Desenvolvimento', max: 38000 },
                { name: 'Despesas', max: 52000 },
                { name: 'Receitas', max: 25000 }
            ]
        },
        series: [
            {
                name: 'Orçamento vs Despesas',
                type: 'radar',
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: 'Receitas'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: 'Despesas'
                    },
                ],
            }
        ],
    }),
});

// Website Traffic

document.addEventListener('DOMContentLoaded', () => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textstyle: {
                color: '#fffffff',
            },
        },
        series: [
            {
                name: 'Acesso ao site',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Pesquisa Orgânica' },
                    { value: 735, name: 'Referência' },
                    { value: 580, name: 'Redes Sociais' },
                    { value: 484, name: 'Tráfego Direto' },
                    { value: 300, name: 'Outros' }
                ]
            }
        ],
    });
});