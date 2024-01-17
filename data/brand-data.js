const brandList = [];

for (let i = 1; i <= 29; i++) {
    brandList.push({
        id: i,
        brandImg: `/assets/img/brand/brand-${i}.png`,
    });
}

export default brandList;