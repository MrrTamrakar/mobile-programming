import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

const APP_NAME = "Kalakar";

const CATEGORIES = ["All", "Graphic", "Garment", "Thumbnail", "Motion"];

const DESIGNERS = [
  { id: "d1", name: "Priya", niche: "Thumbnail", rate: "Rs 800/hr", rating: 4.8 },
  { id: "d2", name: "Anish", niche: "Graphic", rate: "Rs 1,200/hr", rating: 4.6 },
  { id: "d3", name: "Sworup", niche: "Motion", rate: "Rs 1,500/hr", rating: 4.9 },
  { id: "d4", name: "Kripa", niche: "Garment", rate: "Rs 1,000/hr", rating: 4.7 },
];

const COURSES = [
  { id: "c1", title: "Intro to Motion Graphics", mentor: "Sworup", price: "Rs 1,500" },
  { id: "c2", title: "Garment Design Basics", mentor: "Kripa", price: "Rs 2,000" },
  { id: "c3", title: "Thumbnail Mastery", mentor: "Priya", price: "Free" },
];

const FEED_ITEMS = [
  { id: "f1", designer: "Priya", niche: "Thumbnail", likes: 24, comments: 5 },
  { id: "f2", designer: "Anish", niche: "Graphic", likes: 41, comments: 9 },
  { id: "f3", designer: "Sworup", niche: "Motion", likes: 18, comments: 2 },
];

const NOTIFICATIONS = [
  { id: "n1", text: "Anish accepted your booking request" },
  { id: "n2", text: "New comment on your thumbnail post" },
  { id: "n3", text: "Priya enrolled in your course" },
];

const TABS = [
  { key: "home", label: "Home", icon: "🏠" },
  { key: "browse", label: "Browse", icon: "🔍" },
  { key: "post", label: "Post", icon: "➕" },
  { key: "courses", label: "Courses", icon: "🎓" },
  { key: "activity", label: "Activity", icon: "🔔" },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [hiredIds, setHiredIds] = useState([]);
  const [enrolledIds, setEnrolledIds] = useState([]);
  const [caption, setCaption] = useState("");
  const [posted, setPosted] = useState(false);

  // Runs again every render — no useMemo, just plain filtering.
  const filteredDesigners = DESIGNERS.filter((d) => {
    const matchesCategory = selectedCategory === "All" || d.niche === selectedCategory;
    const matchesSearch = d.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredFeed = FEED_ITEMS.filter((item) => {
    return selectedCategory === "All" || item.niche === selectedCategory;
  });

  function toggleHire(id) {
    if (hiredIds.includes(id)) {
      setHiredIds(hiredIds.filter((hiredId) => hiredId !== id));
    } else {
      setHiredIds([...hiredIds, id]);
    }
  }

  function toggleEnroll(id) {
    if (enrolledIds.includes(id)) {
      setEnrolledIds(enrolledIds.filter((enrolledId) => enrolledId !== id));
    } else {
      setEnrolledIds([...enrolledIds, id]);
    }
  }

  function handlePost() {
    if (caption.trim() !== "") {
      setPosted(true);
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarRow}>
          <Text style={styles.appName}>{APP_NAME}</Text>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>D</Text>
          </View>
        </View>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search designers..."
          placeholderTextColor="#94a3b8"
        />
      </View>

      {/* Home tab */}
      {activeTab === "home" && (
        <ScrollView style={styles.body}>
          <View style={styles.chipRow}>
            {CATEGORIES.map((category) => (
              <Pressable
                key={category}
                style={[styles.chip, selectedCategory === category && styles.chipSelected]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[styles.chipText, selectedCategory === category && styles.chipTextSelected]}>
                  {category}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Top Designers</Text>
          <View style={styles.horizontalRow}>
            {filteredDesigners.slice(0, 3).map((d) => (
              <View key={d.id} style={styles.designerChip}>
                <View style={styles.designerAvatar}>
                  <Text style={styles.designerAvatarText}>{d.name[0]}</Text>
                </View>
                <Text style={styles.designerChipName}>{d.name}</Text>
                <Text style={styles.designerChipNiche}>{d.niche}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Community Feed</Text>
          {filteredFeed.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardImagePlaceholder} />
              <View style={styles.cardMeta}>
                <Text style={styles.cardDesigner}>{item.designer} · {item.niche}</Text>
                <Text style={styles.cardStats}>♥ {item.likes}   💬 {item.comments}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      {/* Browse tab */}
      {activeTab === "browse" && (
        <ScrollView style={styles.body}>
          {filteredDesigners.map((item) => {
            const isHired = hiredIds.includes(item.id);
            return (
              <View key={item.id} style={styles.listRow}>
                <View style={styles.designerAvatar}>
                  <Text style={styles.designerAvatarText}>{item.name[0]}</Text>
                </View>
                <View style={styles.listRowInfo}>
                  <Text style={styles.listRowName}>{item.name}</Text>
                  <Text style={styles.listRowSub}>{item.niche} · {item.rate} · ★ {item.rating}</Text>
                </View>
                <Pressable
                  style={[styles.hireButton, isHired && styles.hireButtonActive]}
                  onPress={() => toggleHire(item.id)}
                >
                  <Text style={styles.hireButtonText}>{isHired ? "Requested" : "Hire"}</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      )}

      {/* Post tab */}
      {activeTab === "post" && (
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Share your work</Text>
          <View style={styles.uploadBox}>
            <Text style={styles.uploadBoxText}>+ Add photo</Text>
          </View>
          <TextInput
            style={styles.captionInput}
            value={caption}
            onChangeText={setCaption}
            placeholder="Write a caption..."
            placeholderTextColor="#94a3b8"
            multiline
          />
          <Pressable style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>{posted ? "Posted!" : "Post"}</Text>
          </Pressable>
        </View>
      )}

      {/* Courses tab */}
      {activeTab === "courses" && (
        <ScrollView style={styles.body}>
          {COURSES.map((item) => {
            const isEnrolled = enrolledIds.includes(item.id);
            return (
              <View key={item.id} style={styles.listRow}>
                <View style={styles.courseImagePlaceholder} />
                <View style={styles.listRowInfo}>
                  <Text style={styles.listRowName}>{item.title}</Text>
                  <Text style={styles.listRowSub}>{item.mentor} · {item.price}</Text>
                </View>
                <Pressable
                  style={[styles.hireButton, isEnrolled && styles.hireButtonActive]}
                  onPress={() => toggleEnroll(item.id)}
                >
                  <Text style={styles.hireButtonText}>{isEnrolled ? "Enrolled" : "Enroll"}</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      )}

      {/* Activity tab */}
      {activeTab === "activity" && (
        <ScrollView style={styles.body}>
          {NOTIFICATIONS.map((item) => (
            <View key={item.id} style={styles.notifRow}>
              <Text style={styles.notifText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        {TABS.map((tab) => (
          <Pressable key={tab.key} style={styles.tab} onPress={() => setActiveTab(tab.key)}>
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, activeTab === tab.key && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#25292e" },
  body: { flex: 1 },

  topBar: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 },
  topBarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  appName: { fontSize: 20, fontWeight: "800", color: "#ffffff" },
  avatar: { width: 30, height: 30, borderRadius: 15, backgroundColor: "#007AFF", alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#ffffff", fontWeight: "700", fontSize: 13 },
  searchInput: { backgroundColor: "#2f343b", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, color: "#ffffff", fontSize: 13 },

  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, paddingHorizontal: 16, marginBottom: 8 },
  chip: { borderWidth: 1, borderColor: "#3a3f45", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 14 },
  chipSelected: { backgroundColor: "#007AFF", borderColor: "#007AFF" },
  chipText: { color: "#94a3b8", fontSize: 13, fontWeight: "600" },
  chipTextSelected: { color: "#ffffff" },

  sectionTitle: { color: "#ffffff", fontSize: 15, fontWeight: "700", paddingHorizontal: 16, marginTop: 8, marginBottom: 10 },
  horizontalRow: { flexDirection: "row", flexWrap: "wrap", gap: 12, paddingHorizontal: 16, marginBottom: 8 },

  designerChip: { width: 100, backgroundColor: "#2f343b", borderRadius: 12, padding: 10, alignItems: "center" },
  designerAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#007AFF", alignItems: "center", justifyContent: "center" },
  designerAvatarText: { color: "#ffffff", fontWeight: "700", fontSize: 15 },
  designerChipName: { color: "#ffffff", fontSize: 12, fontWeight: "700", marginTop: 6 },
  designerChipNiche: { color: "#94a3b8", fontSize: 11 },

  card: { backgroundColor: "#2f343b", borderRadius: 14, overflow: "hidden", marginHorizontal: 16, marginBottom: 16 },
  cardImagePlaceholder: { width: "100%", height: 160, backgroundColor: "#3a3f45" },
  cardMeta: { padding: 12 },
  cardDesigner: { color: "#ffffff", fontWeight: "700", fontSize: 14, marginBottom: 6 },
  cardStats: { color: "#94a3b8", fontSize: 13 },

  listRow: { flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: "#2f343b", borderRadius: 12, padding: 12, marginHorizontal: 16, marginBottom: 12 },
  listRowInfo: { flex: 1 },
  listRowName: { color: "#ffffff", fontWeight: "700", fontSize: 14, marginBottom: 2 },
  listRowSub: { color: "#94a3b8", fontSize: 12 },
  hireButton: { backgroundColor: "#007AFF", borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  hireButtonActive: { backgroundColor: "#3a3f45" },
  hireButtonText: { color: "#ffffff", fontWeight: "700", fontSize: 12 },

  courseImagePlaceholder: { width: 44, height: 44, borderRadius: 8, backgroundColor: "#3a3f45" },

  uploadBox: { marginHorizontal: 16, height: 140, borderRadius: 12, borderWidth: 1, borderColor: "#3a3f45", borderStyle: "dashed", alignItems: "center", justifyContent: "center", marginBottom: 16, marginTop: 8 },
  uploadBoxText: { color: "#94a3b8", fontSize: 14 },
  captionInput: { marginHorizontal: 16, minHeight: 80, backgroundColor: "#2f343b", borderRadius: 10, padding: 12, color: "#ffffff", fontSize: 14, textAlignVertical: "top", marginBottom: 16 },
  postButton: { marginHorizontal: 16, backgroundColor: "#007AFF", borderRadius: 8, paddingVertical: 14, alignItems: "center" },
  postButtonText: { color: "#ffffff", fontWeight: "700", fontSize: 15 },

  notifRow: { backgroundColor: "#2f343b", borderRadius: 12, padding: 14, marginHorizontal: 16, marginBottom: 10 },
  notifText: { color: "#ffffff", fontSize: 13 },

  bottomNav: { flexDirection: "row", borderTopWidth: 1, borderTopColor: "#3a3f45", paddingTop: 8, paddingBottom: 8 },
  tab: { flex: 1, alignItems: "center", gap: 2 },
  tabIcon: { fontSize: 18, opacity: 0.5 },
  tabLabel: { fontSize: 9, color: "#94a3b8" },
  tabLabelActive: { color: "#007AFF", fontWeight: "700" },
});