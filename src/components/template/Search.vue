<template>
  <section>
    <!-- <p class="content"><b>Selected:</b> {{ selected }}</p> -->
    <!-- <b-field label="Find a JS framework"> -->
    <b-autocomplete
      rounded
      v-model="name"
      :data="filteredDataArray"
      placeholder="Busque aqui seu produto"
      clearable
      icon="magnify"
      @select="option => selected = option"
    >
      <template slot="empty">Não encontramos o produto :(</template>
    </b-autocomplete>
    <!-- </b-field> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        "Xiaomi Readmi S2",
        "Arroz",
        "Notebook",
        "Veronica Decide Morrer",
        "Arroz",
        "Monitor LG 19.5",
        "Cabo Hdmi 2.0 4K Hdr",
        "Guitarra",
        "Camera",
        "Refrigerante",
        "Copo",
        "Cachaça",
      ],
      name: "",
      selected: null,
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>
