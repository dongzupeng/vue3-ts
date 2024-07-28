<template>
    <div>
        <div>
            <span>交易所名称：</span>
            <el-select
                v-model="value"
                clearable
                placeholder="请选择交易所"
                style="width: 240px"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
            </el-select>
        </div>
        <div style="min-height: 300px; height: 500px">
            <el-auto-resizer>
                <template #default="{ height, width }">
                    <el-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed >
                        <template #empty>
                            <div>
                                <el-empty description="暂无数据" />
                            </div>
                        </template>
                    </el-table-v2>
                </template>
            </el-auto-resizer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getRequest } from "@/request";
import { ref } from "vue"
const value = ref('')
const options = [
  {
    value: 'BINANCE',
    label: 'BINANCE',
  },
  {
    value: 'OKX',
    label: 'OKX',
  },
  {
    value: 'BITGET',
    label: 'BITGET',
  },
  {
    value: 'COINBASE',
    label: 'COINBASE',
  },
  {
    value: 'BYBIT',
    label: 'BYBIT',
  },
  {
    value: 'GATE',
    label: 'GATE',
  }
]
let data = ref([
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    },
    {
        "id": "66a530a84fadea117fe443bd", //ID
        "symbol": "BOME_USDT", //币种
        "baseCoin": "BOME", //基础货币
        "quoteCoin": "USDT", //报价货币
        "exchange": "GATE", //交易所
        "priceChange": "-0.000037", //价格变动
        "priceChangePercent": "-0.0102", //价格变动比例
        "lastPrice": "0.008463", //最新价格
        "firstPrice": "0.0085", //首次价格
        "highPrice": "0.008978", //最高价格
        "lowPrice": "0.008428", //最低价格
        "volume": "1709676633.4", //成交量
        "quoteVolume": "14910181.488019" //成交额
    }
])
const columns = [
    {
        key: 'symbol',
        title: '币种',
        width: 150,
        align: 'center',
        dataKey: 'symbol',
    },
    {
        key: 'baseCoin',
        title: '基础货币',
        width: 150,
        align: 'center',
        dataKey: 'baseCoin',
    },
    {
        key: 'quoteCoin',
        title: '报价货币',
        width: 150,
        align: 'center',
        dataKey: 'quoteCoin',
    },
    {
        key: 'exchange',
        title: '交易所',
        width: 150,
        align: 'center',
        dataKey: 'exchange',
    },
    {
        key: 'priceChange',
        title: '价格变动',
        width: 150,
        align: 'center',
        dataKey: 'priceChange',
    },
    {
        key: 'priceChangePercent',
        title: '价格变动比例',
        width: 150,
        align: 'center',
        dataKey: 'priceChangePercent',
    },
    {
        key: 'lastPrice',
        title: '最新价格',
        width: 150,
        align: 'center',
        dataKey: 'lastPrice',
    },
    {
        key: 'firstPrice',
        title: '首次价格',
        width: 150,
        align: 'center',
        dataKey: 'firstPrice',
    },
    {
        key: 'highPrice',
        title: '最高价格',
        width: 150,
        align: 'center',
        dataKey: 'highPrice',
    },
    {
        key: 'lowPrice',
        title: '最低价格',
        width: 150,
        align: 'center',
        dataKey: 'lowPrice',
    },
    {
        key: 'volume',
        title: '成交量',
        width: 150,
        align: 'center',
        dataKey: 'volume',
    },
    {
        key: 'quoteVolume',
        title: '成交额',
        width: 150,
        align: 'center',
        dataKey: 'quoteVolume',
    },
    
]
const getData = () => {
    getRequest('/symbol/page')
        .then((res) => {
            // 处理响应数据
            // if (res.msg === 'success') {
            //     data = res.data.items
            // }
        })
        .catch((error) => {
            // 处理错误
        });
}
getData()
</script>

<style lang="scss" scoped></style>