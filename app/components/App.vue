<template lang="html" >
 <page>
    <BottomNavigation>
        <TabStrip>
            <TabStripItem class="navigation__item">
                <Label text="Events"></Label>
                <Image src.decode="font://&#xf015;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Matches"></Label>
                <Image src.decode="font://&#xf1ea;" class="far t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Your Event"></Label>
                <Image src.decode="font://&#xf002;" class="fas t-36"></Image>
            </TabStripItem>
             <TabStripItem class="navigation__item">
                <Label text="Chat"></Label>
                <Image src.decode="font://&#xf002;" class="fas t-36"></Image>
            </TabStripItem>
        </TabStrip>

        <TabContentItem>
            <Frame id="Events">
                <Events/>
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame id="Matches">
                <Matches/>
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame id="Your Event">
                <CreatedEvent/>
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame id="Chat">
                <Chat/>
            </Frame>
        </TabContentItem>

    </BottomNavigation>
    </page>
</template>

<script>
import Events from "./Events.vue";
import Matches from "./Matches.vue";
import CreatedEvent from "./CreatedEvent.vue";
import Chat from "./Chat.vue";


export default {
  components: {
    Events,
    Matches,
    CreatedEvent,
    Chat
  },

};
</script>

<style lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
