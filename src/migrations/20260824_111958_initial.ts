import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_menu_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_pages_blocks_menu_variant" AS ENUM('default', 'minimal', 'pills');
  CREATE TYPE "public"."enum_pages_blocks_heading_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_heading_title_tag" AS ENUM('h1', 'h2', 'h3', 'h4', 'p', 'span');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_image_link_type" AS ENUM('none', 'internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_image_aspect_ratio" AS ENUM('auto', '1/1', '3/2', '4/3', '16/9', '2/3', '3/4', '9/16', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_video_source_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."enum_pages_blocks_video_aspect_ratio" AS ENUM('16/9', '4/3', '1/1', '9/16', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_pages_blocks_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_tabs_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_pages_blocks_tabs_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_tabs_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_pages_blocks_tabs_variant" AS ENUM('default', 'full', 'minimal');
  CREATE TYPE "public"."enum_pages_blocks_tabs_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_tabs_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_tabs_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_tabs_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_slider_settings_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_pages_blocks_slider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_slider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_slider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_slider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_slider_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_slider_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_accordion_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_pages_blocks_accordion_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_accordion_variant" AS ENUM('default', 'bordered', 'minimal');
  CREATE TYPE "public"."enum_pages_blocks_accordion_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_accordion_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_accordion_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_accordion_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_accordion_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_accordion_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_cta_alignment" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cta_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_cta_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_cta_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_cta_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_cta_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_cta_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_hero_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_hero_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_hero_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_hero_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_hero_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_hero_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_services_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_pages_blocks_services_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_services_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_services_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_services_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_services_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_services_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_services_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_process_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_process_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_process_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_process_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_process_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_process_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_gallery_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_gallery_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_gallery_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_gallery_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_gallery_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_gallery_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_instagram_strip_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_instagram_strip_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_instagram_strip_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_instagram_strip_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_instagram_strip_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_instagram_strip_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_contact_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_contact_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_contact_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_contact_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_contact_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_contact_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_about_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_about_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_about_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_about_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_about_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_about_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_about_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_pricing_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_pricing_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_pages_blocks_pricing_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_pricing_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_pricing_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_pricing_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_pricing_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_pricing_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_pricing_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_faq_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_faq_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_faq_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_faq_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_faq_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_faq_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_layout" AS ENUM('grid', 'carousel');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_columns" AS ENUM('col-2', 'col-3');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_stats_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_pages_blocks_stats_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_stats_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_stats_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_stats_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_stats_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_stats_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_team_items_social_links_platform" AS ENUM('link', 'facebook', 'instagram', 'linkedin', 'youtube', 'xTwitter', 'whatsapp');
  CREATE TYPE "public"."enum_pages_blocks_team_columns" AS ENUM('col-1', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_pages_blocks_team_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_pages_blocks_team_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_team_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_pages_blocks_team_grid_variant" AS ENUM('auto', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_pages_blocks_team_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_team_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_team_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_team_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_team_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_team_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_team_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_form_block_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_form_block_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_form_block_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_form_block_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_form_block_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_form_block_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_pages_blocks_divider_line_style" AS ENUM('solid', 'dashed', 'dotted');
  CREATE TYPE "public"."enum_pages_blocks_divider_thickness" AS ENUM('thin', 'medium', 'thick');
  CREATE TYPE "public"."enum_pages_blocks_divider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_divider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_divider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_divider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_block_holder2_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_pages_blocks_block_holder2_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_block_holder2_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_pages_blocks_block_holder2_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_pages_blocks_block_holder2_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_block_holder1_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_pages_blocks_block_holder1_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_block_holder1_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_pages_blocks_block_holder1_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_pages_blocks_block_holder1_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_block_holder0_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_pages_blocks_block_holder0_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_block_holder0_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_pages_blocks_block_holder0_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_pages_blocks_block_holder0_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_posts_block_populate_by" AS ENUM('latest', 'categories', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_posts_block_layout" AS ENUM('grid', 'slider');
  CREATE TYPE "public"."enum_pages_blocks_posts_block_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_posts_block_grid_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_viewport" AS ENUM('auto', 'full');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_width_type" AS ENUM('fullWidth', 'boxed');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_alignment" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_container_type" AS ENUM('container-xl', 'container-lg', 'container', 'container-xs');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_section_settings_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_menu_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_posts_blocks_menu_variant" AS ENUM('default', 'minimal', 'pills');
  CREATE TYPE "public"."enum_posts_blocks_heading_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_posts_blocks_heading_title_tag" AS ENUM('h1', 'h2', 'h3', 'h4', 'p', 'span');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_posts_blocks_image_link_type" AS ENUM('none', 'internal', 'external');
  CREATE TYPE "public"."enum_posts_blocks_image_aspect_ratio" AS ENUM('auto', '1/1', '3/2', '4/3', '16/9', '2/3', '3/4', '9/16', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_video_source_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."enum_posts_blocks_video_aspect_ratio" AS ENUM('16/9', '4/3', '1/1', '9/16', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_posts_blocks_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_posts_blocks_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_posts_blocks_tabs_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_posts_blocks_tabs_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_posts_blocks_tabs_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_posts_blocks_tabs_variant" AS ENUM('default', 'full', 'minimal');
  CREATE TYPE "public"."enum_posts_blocks_tabs_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_tabs_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_tabs_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_tabs_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_slider_settings_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_posts_blocks_slider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_slider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_slider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_slider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_slider_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_slider_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_accordion_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_posts_blocks_accordion_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_posts_blocks_accordion_variant" AS ENUM('default', 'bordered', 'minimal');
  CREATE TYPE "public"."enum_posts_blocks_accordion_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_accordion_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_accordion_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_accordion_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_accordion_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_accordion_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_cta_alignment" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_cta_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_cta_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_cta_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_cta_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_cta_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_cta_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_hero_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_hero_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_hero_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_hero_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_hero_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_hero_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_services_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_posts_blocks_services_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_posts_blocks_services_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_services_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_services_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_services_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_services_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_services_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_process_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_process_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_process_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_process_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_process_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_process_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_gallery_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_gallery_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_gallery_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_gallery_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_gallery_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_gallery_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_instagram_strip_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_instagram_strip_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_instagram_strip_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_instagram_strip_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_instagram_strip_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_instagram_strip_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_contact_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_contact_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_contact_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_contact_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_contact_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_contact_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_about_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_posts_blocks_about_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_about_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_about_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_about_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_about_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_about_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_pricing_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_posts_blocks_pricing_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_pricing_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_posts_blocks_pricing_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_posts_blocks_pricing_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_pricing_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_pricing_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_pricing_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_pricing_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_pricing_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_faq_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_faq_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_faq_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_faq_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_faq_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_faq_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_layout" AS ENUM('grid', 'carousel');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_columns" AS ENUM('col-2', 'col-3');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_stats_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_posts_blocks_stats_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_stats_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_stats_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_stats_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_stats_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_stats_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_team_items_social_links_platform" AS ENUM('link', 'facebook', 'instagram', 'linkedin', 'youtube', 'xTwitter', 'whatsapp');
  CREATE TYPE "public"."enum_posts_blocks_team_columns" AS ENUM('col-1', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_posts_blocks_team_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_posts_blocks_team_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_posts_blocks_team_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_posts_blocks_team_grid_variant" AS ENUM('auto', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_posts_blocks_team_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_team_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_team_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_team_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_team_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_team_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_team_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_form_block_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_form_block_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_form_block_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_form_block_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_form_block_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_form_block_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_posts_blocks_divider_line_style" AS ENUM('solid', 'dashed', 'dotted');
  CREATE TYPE "public"."enum_posts_blocks_divider_thickness" AS ENUM('thin', 'medium', 'thick');
  CREATE TYPE "public"."enum_posts_blocks_divider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_divider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_divider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_divider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_block_holder2_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_posts_blocks_block_holder2_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_posts_blocks_block_holder2_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_posts_blocks_block_holder2_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_posts_blocks_block_holder2_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_block_holder1_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_posts_blocks_block_holder1_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_posts_blocks_block_holder1_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_posts_blocks_block_holder1_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_posts_blocks_block_holder1_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_block_holder0_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_posts_blocks_block_holder0_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_posts_blocks_block_holder0_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_posts_blocks_block_holder0_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_posts_blocks_block_holder0_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_posts_block_populate_by" AS ENUM('latest', 'categories', 'manual');
  CREATE TYPE "public"."enum_posts_blocks_posts_block_layout" AS ENUM('grid', 'slider');
  CREATE TYPE "public"."enum_posts_blocks_posts_block_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_posts_block_grid_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_viewport" AS ENUM('auto', 'full');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_width_type" AS ENUM('fullWidth', 'boxed');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_alignment" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_container_type" AS ENUM('container-xl', 'container-lg', 'container', 'container-xs');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_posts_blocks_section_settings_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_menus_items_children_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_menus_items_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_menus_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_menus_variant" AS ENUM('default');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_forms_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_blocks_menu_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_header_blocks_menu_variant" AS ENUM('default', 'minimal', 'pills');
  CREATE TYPE "public"."enum_header_blocks_heading_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_header_blocks_heading_title_tag" AS ENUM('h1', 'h2', 'h3', 'h4', 'p', 'span');
  CREATE TYPE "public"."enum_header_blocks_rich_text_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_header_blocks_image_link_type" AS ENUM('none', 'internal', 'external');
  CREATE TYPE "public"."enum_header_blocks_image_aspect_ratio" AS ENUM('auto', '1/1', '3/2', '4/3', '16/9', '2/3', '3/4', '9/16', 'custom');
  CREATE TYPE "public"."enum_header_blocks_video_source_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."enum_header_blocks_video_aspect_ratio" AS ENUM('16/9', '4/3', '1/1', '9/16', 'custom');
  CREATE TYPE "public"."enum_header_blocks_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_header_blocks_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_header_blocks_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_header_blocks_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_tabs_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_header_blocks_tabs_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_tabs_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_header_blocks_tabs_variant" AS ENUM('default', 'full', 'minimal');
  CREATE TYPE "public"."enum_header_blocks_tabs_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_tabs_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_tabs_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_tabs_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_slider_settings_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_header_blocks_slider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_slider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_slider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_slider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_slider_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_slider_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_accordion_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_header_blocks_accordion_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_accordion_variant" AS ENUM('default', 'bordered', 'minimal');
  CREATE TYPE "public"."enum_header_blocks_accordion_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_accordion_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_accordion_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_accordion_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_accordion_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_accordion_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_cta_alignment" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_header_blocks_cta_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_cta_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_cta_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_cta_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_cta_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_cta_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_hero_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_hero_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_hero_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_hero_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_hero_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_hero_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_services_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_header_blocks_services_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_services_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_services_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_services_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_services_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_services_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_services_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_process_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_process_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_process_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_process_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_process_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_process_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_gallery_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_gallery_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_gallery_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_gallery_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_gallery_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_gallery_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_instagram_strip_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_instagram_strip_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_instagram_strip_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_instagram_strip_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_instagram_strip_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_instagram_strip_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_contact_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_contact_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_contact_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_contact_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_contact_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_contact_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_about_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_about_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_about_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_about_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_about_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_about_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_about_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_pricing_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_header_blocks_pricing_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_header_blocks_pricing_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_header_blocks_pricing_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_pricing_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_pricing_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_pricing_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_pricing_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_pricing_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_pricing_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_faq_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_faq_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_faq_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_faq_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_faq_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_faq_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_testimonials_layout" AS ENUM('grid', 'carousel');
  CREATE TYPE "public"."enum_header_blocks_testimonials_columns" AS ENUM('col-2', 'col-3');
  CREATE TYPE "public"."enum_header_blocks_testimonials_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_testimonials_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_testimonials_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_testimonials_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_testimonials_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_testimonials_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_stats_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_header_blocks_stats_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_stats_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_stats_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_stats_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_stats_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_stats_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_team_items_social_links_platform" AS ENUM('link', 'facebook', 'instagram', 'linkedin', 'youtube', 'xTwitter', 'whatsapp');
  CREATE TYPE "public"."enum_header_blocks_team_columns" AS ENUM('col-1', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_header_blocks_team_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_header_blocks_team_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_header_blocks_team_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_header_blocks_team_grid_variant" AS ENUM('auto', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_header_blocks_team_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_team_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_team_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_team_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_team_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_team_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_team_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_form_block_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_form_block_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_form_block_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_form_block_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_form_block_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_form_block_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_blocks_divider_line_style" AS ENUM('solid', 'dashed', 'dotted');
  CREATE TYPE "public"."enum_header_blocks_divider_thickness" AS ENUM('thin', 'medium', 'thick');
  CREATE TYPE "public"."enum_header_blocks_divider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_divider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_divider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_divider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_block_holder2_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_header_blocks_block_holder2_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_header_blocks_block_holder2_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_header_blocks_block_holder2_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_header_blocks_block_holder2_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_block_holder1_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_header_blocks_block_holder1_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_header_blocks_block_holder1_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_header_blocks_block_holder1_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_header_blocks_block_holder1_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_block_holder0_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_header_blocks_block_holder0_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_header_blocks_block_holder0_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_header_blocks_block_holder0_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_header_blocks_block_holder0_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_posts_block_populate_by" AS ENUM('latest', 'categories', 'manual');
  CREATE TYPE "public"."enum_header_blocks_posts_block_layout" AS ENUM('grid', 'slider');
  CREATE TYPE "public"."enum_header_blocks_posts_block_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_posts_block_grid_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_header_blocks_section_settings_viewport" AS ENUM('auto', 'full');
  CREATE TYPE "public"."enum_header_blocks_section_settings_width_type" AS ENUM('fullWidth', 'boxed');
  CREATE TYPE "public"."enum_header_blocks_section_settings_alignment" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_header_blocks_section_settings_container_type" AS ENUM('container-xl', 'container-lg', 'container', 'container-xs');
  CREATE TYPE "public"."enum_header_blocks_section_settings_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_section_settings_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_section_settings_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_section_settings_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_header_blocks_section_settings_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_header_blocks_section_settings_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_header_variant" AS ENUM('default', 'transparent', 'minimal');
  CREATE TYPE "public"."enum_header_sticky" AS ENUM('none', 'sticky', 'sticky-up');
  CREATE TYPE "public"."enum_footer_blocks_menu_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_footer_blocks_menu_variant" AS ENUM('default', 'minimal', 'pills');
  CREATE TYPE "public"."enum_footer_blocks_heading_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_footer_blocks_heading_title_tag" AS ENUM('h1', 'h2', 'h3', 'h4', 'p', 'span');
  CREATE TYPE "public"."enum_footer_blocks_rich_text_variant" AS ENUM('default', 'center', 'right');
  CREATE TYPE "public"."enum_footer_blocks_image_link_type" AS ENUM('none', 'internal', 'external');
  CREATE TYPE "public"."enum_footer_blocks_image_aspect_ratio" AS ENUM('auto', '1/1', '3/2', '4/3', '16/9', '2/3', '3/4', '9/16', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_video_source_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."enum_footer_blocks_video_aspect_ratio" AS ENUM('16/9', '4/3', '1/1', '9/16', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_footer_blocks_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_footer_blocks_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_footer_blocks_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_tabs_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_footer_blocks_tabs_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_tabs_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_footer_blocks_tabs_variant" AS ENUM('default', 'full', 'minimal');
  CREATE TYPE "public"."enum_footer_blocks_tabs_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_tabs_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_tabs_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_tabs_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_slider_settings_orientation" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_footer_blocks_slider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_slider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_slider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_slider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_slider_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_slider_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_accordion_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_footer_blocks_accordion_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_accordion_variant" AS ENUM('default', 'bordered', 'minimal');
  CREATE TYPE "public"."enum_footer_blocks_accordion_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_accordion_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_accordion_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_accordion_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_accordion_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_accordion_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_cta_alignment" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_footer_blocks_cta_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_cta_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_cta_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_cta_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_cta_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_cta_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_hero_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_hero_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_hero_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_hero_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_hero_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_hero_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_services_items_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_footer_blocks_services_items_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_services_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_services_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_services_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_services_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_services_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_services_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_process_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_process_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_process_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_process_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_process_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_process_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_gallery_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_gallery_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_gallery_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_gallery_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_gallery_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_gallery_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_instagram_strip_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_instagram_strip_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_instagram_strip_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_instagram_strip_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_instagram_strip_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_instagram_strip_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_contact_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_contact_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_contact_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_contact_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_contact_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_contact_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_about_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_about_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_about_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_about_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_about_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_about_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_about_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_pricing_button_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_footer_blocks_pricing_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'outline');
  CREATE TYPE "public"."enum_footer_blocks_pricing_button_icon_type" AS ENUM('picker', 'customSvg');
  CREATE TYPE "public"."enum_footer_blocks_pricing_button_icon_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_pricing_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_pricing_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_pricing_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_pricing_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_pricing_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_pricing_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_faq_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_faq_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_faq_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_faq_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_faq_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_faq_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_layout" AS ENUM('grid', 'carousel');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_columns" AS ENUM('col-2', 'col-3');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_testimonials_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_stats_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_footer_blocks_stats_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_stats_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_stats_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_stats_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_stats_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_stats_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_team_items_social_links_platform" AS ENUM('link', 'facebook', 'instagram', 'linkedin', 'youtube', 'xTwitter', 'whatsapp');
  CREATE TYPE "public"."enum_footer_blocks_team_columns" AS ENUM('col-1', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_footer_blocks_team_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_footer_blocks_team_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_footer_blocks_team_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_footer_blocks_team_grid_variant" AS ENUM('auto', 'col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_footer_blocks_team_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_team_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_team_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_team_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_team_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_team_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_team_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_form_block_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_form_block_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_form_block_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_form_block_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_form_block_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_form_block_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_blocks_divider_line_style" AS ENUM('solid', 'dashed', 'dotted');
  CREATE TYPE "public"."enum_footer_blocks_divider_thickness" AS ENUM('thin', 'medium', 'thick');
  CREATE TYPE "public"."enum_footer_blocks_divider_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_divider_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_divider_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_divider_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_block_holder2_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_footer_blocks_block_holder2_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_footer_blocks_block_holder2_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_footer_blocks_block_holder2_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_footer_blocks_block_holder2_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_block_holder1_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_footer_blocks_block_holder1_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_footer_blocks_block_holder1_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_footer_blocks_block_holder1_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_footer_blocks_block_holder1_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_block_holder0_layout" AS ENUM('block', 'flex', 'grid');
  CREATE TYPE "public"."enum_footer_blocks_block_holder0_vertical_alignment" AS ENUM('top', 'middle', 'bottom');
  CREATE TYPE "public"."enum_footer_blocks_block_holder0_flex_variant" AS ENUM('row', 'row-reverse', 'row-wrap', 'column', 'column-reverse', 'column-center');
  CREATE TYPE "public"."enum_footer_blocks_block_holder0_grid_variant" AS ENUM('auto', 'col-2', 'col-3');
  CREATE TYPE "public"."enum_footer_blocks_block_holder0_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_posts_block_populate_by" AS ENUM('latest', 'categories', 'manual');
  CREATE TYPE "public"."enum_footer_blocks_posts_block_layout" AS ENUM('grid', 'slider');
  CREATE TYPE "public"."enum_footer_blocks_posts_block_gap" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_posts_block_grid_columns" AS ENUM('col-2', 'col-3', 'col-4');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_viewport" AS ENUM('auto', 'full');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_width_type" AS ENUM('fullWidth', 'boxed');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_alignment" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_container_type" AS ENUM('container-xl', 'container-lg', 'container', 'container-xs');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_spacing_padding_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_spacing_padding_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_spacing_margin_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_spacing_margin_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_background_type" AS ENUM('blank', 'color', 'gradient', 'image', 'video');
  CREATE TYPE "public"."enum_footer_blocks_section_settings_background_gradient_theme" AS ENUM('warm', 'cool');
  CREATE TYPE "public"."enum_footer_variant" AS ENUM('default', 'minimal');
  CREATE TYPE "public"."enum_site_settings_robots" AS ENUM('index, follow', 'noindex, nofollow', 'index, nofollow', 'noindex, follow');
  CREATE TABLE "pages_blocks_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"menu_id" integer NOT NULL,
  	"orientation" "enum_pages_blocks_menu_orientation" DEFAULT 'horizontal',
  	"variant" "enum_pages_blocks_menu_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_heading_variant" DEFAULT 'default',
  	"title_tag" "enum_pages_blocks_heading_title_tag" DEFAULT 'h2',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"variant" "enum_pages_blocks_rich_text_variant" DEFAULT 'default',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_pages_blocks_image_link_type" DEFAULT 'none',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"aspect_ratio" "enum_pages_blocks_image_aspect_ratio" DEFAULT 'auto',
  	"custom_aspect_ratio" varchar,
  	"overlay_enabled" boolean DEFAULT false,
  	"overlay_color" varchar,
  	"overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source_type" "enum_pages_blocks_video_source_type" DEFAULT 'upload',
  	"file_id" integer,
  	"poster_id" integer,
  	"url" varchar,
  	"aspect_ratio" "enum_pages_blocks_video_aspect_ratio" DEFAULT '16/9',
  	"custom_aspect_ratio" varchar,
  	"controls" boolean DEFAULT true,
  	"autoplay" boolean DEFAULT false,
  	"loop" boolean DEFAULT false,
  	"muted" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"link_type" "enum_pages_blocks_button_link_type" DEFAULT 'internal',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"variant" "enum_pages_blocks_button_variant" DEFAULT 'primary',
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_pages_blocks_button_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_pages_blocks_button_icon_position" DEFAULT 'right',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_active" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_pages_blocks_tabs_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_pages_blocks_tabs_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "pages_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_pages_blocks_tabs_orientation" DEFAULT 'horizontal',
  	"variant" "enum_pages_blocks_tabs_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_tabs_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_tabs_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_tabs_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_tabs_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_orientation" "enum_pages_blocks_slider_settings_orientation" DEFAULT 'horizontal',
  	"settings_space_between" numeric DEFAULT 20,
  	"settings_slides_per_view" numeric DEFAULT 1,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_slider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_slider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_slider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_slider_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_slider_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_slider_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_open" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_pages_blocks_accordion_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_pages_blocks_accordion_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "pages_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"allow_multiple" boolean DEFAULT false,
  	"variant" "enum_pages_blocks_accordion_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_accordion_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_accordion_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_accordion_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_accordion_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_accordion_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_accordion_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"alignment" "enum_pages_blocks_cta_alignment" DEFAULT 'center',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_cta_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_cta_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_cta_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_cta_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_cta_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_cta_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_trust_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"highlighted_title" varchar,
  	"description" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_hero_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_hero_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_hero_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_hero_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_hero_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_hero_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_pages_blocks_services_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_pages_blocks_services_items_icon_position" DEFAULT 'right',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "pages_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_services_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_services_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_services_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_services_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_services_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_services_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_process_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_process_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_process_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_process_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_process_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_process_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"category" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"all_label" varchar DEFAULT 'All',
  	"initial_count" numeric DEFAULT 12,
  	"show_all_label" varchar DEFAULT 'Show all',
  	"show_less_label" varchar DEFAULT 'Show less',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_gallery_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_gallery_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_gallery_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_gallery_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_gallery_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_gallery_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_instagram_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Instagram',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"instagram_handle" varchar,
  	"instagram_url" varchar NOT NULL,
  	"elfsight_widget_id" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_instagram_strip_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_instagram_strip_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_instagram_strip_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_instagram_strip_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_instagram_strip_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_instagram_strip_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Kontakt',
  	"title" varchar NOT NULL,
  	"card_script_text" varchar,
  	"card_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_contact_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_contact_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_contact_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_contact_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_contact_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_contact_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_navbar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"menu_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_footer_columns_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_footer_columns_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_footer_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"description" varchar,
  	"bottom_text" varchar,
  	"bottom_secondary_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_about_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"image_position" "enum_pages_blocks_about_image_position" DEFAULT 'left',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_about_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_about_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_about_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_about_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_about_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_about_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_price_blocks_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_price_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"small_rows" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"note" varchar,
  	"button_text" varchar NOT NULL,
  	"button_link_type" "enum_pages_blocks_pricing_button_link_type" DEFAULT 'internal',
  	"button_internal_link_id" integer,
  	"button_external_url" varchar,
  	"button_new_tab" boolean DEFAULT false,
  	"button_variant" "enum_pages_blocks_pricing_button_variant" DEFAULT 'primary',
  	"button_has_icon" boolean DEFAULT false,
  	"button_icon_type" "enum_pages_blocks_pricing_button_icon_type" DEFAULT 'picker',
  	"button_icon" varchar,
  	"button_custom_svg_id" integer,
  	"button_icon_position" "enum_pages_blocks_pricing_button_icon_position" DEFAULT 'right',
  	"button_html_id" varchar,
  	"button_custom_class_name" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_pricing_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_pricing_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_pricing_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_pricing_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_pricing_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_pricing_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"default_open" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"allow_multiple" boolean DEFAULT true,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_faq_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_faq_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_faq_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_faq_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_faq_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_faq_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"layout" "enum_pages_blocks_testimonials_layout" DEFAULT 'grid',
  	"columns" "enum_pages_blocks_testimonials_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_testimonials_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_testimonials_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_testimonials_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_testimonials_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_testimonials_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_testimonials_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_stats_columns" DEFAULT 'col-4',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_stats_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_stats_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_stats_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_stats_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_stats_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_stats_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team_items_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_pages_blocks_team_items_social_links_platform" DEFAULT 'link',
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_team_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"bio" varchar
  );
  
  CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_team_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_pages_blocks_team_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_pages_blocks_team_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_pages_blocks_team_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_pages_blocks_team_grid_variant" DEFAULT 'auto',
  	"gap" "enum_pages_blocks_team_gap" DEFAULT 'none',
  	"spacing_padding_top" "enum_pages_blocks_team_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_team_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_team_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_team_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_team_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_team_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_form_block_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_form_block_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_form_block_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_form_block_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_pages_blocks_form_block_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_pages_blocks_form_block_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"line_style" "enum_pages_blocks_divider_line_style" DEFAULT 'solid',
  	"thickness" "enum_pages_blocks_divider_thickness" DEFAULT 'thin',
  	"color_theme" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_pages_blocks_divider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_pages_blocks_divider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_pages_blocks_divider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_pages_blocks_divider_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_block_holder2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_pages_blocks_block_holder2_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_pages_blocks_block_holder2_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_pages_blocks_block_holder2_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_pages_blocks_block_holder2_grid_variant" DEFAULT 'auto',
  	"gap" "enum_pages_blocks_block_holder2_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_block_holder1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_pages_blocks_block_holder1_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_pages_blocks_block_holder1_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_pages_blocks_block_holder1_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_pages_blocks_block_holder1_grid_variant" DEFAULT 'auto',
  	"gap" "enum_pages_blocks_block_holder1_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_block_holder0" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_pages_blocks_block_holder0_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_pages_blocks_block_holder0_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_pages_blocks_block_holder0_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_pages_blocks_block_holder0_grid_variant" DEFAULT 'auto',
  	"gap" "enum_pages_blocks_block_holder0_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_posts_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"populate_by" "enum_pages_blocks_posts_block_populate_by" DEFAULT 'latest',
  	"limit" numeric DEFAULT 3 NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_pages_blocks_posts_block_layout" DEFAULT 'grid',
  	"gap" "enum_pages_blocks_posts_block_gap" DEFAULT 'none',
  	"grid_columns" "enum_pages_blocks_posts_block_grid_columns" DEFAULT 'col-3',
  	"autoplay" boolean DEFAULT false,
  	"show_arrows" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_html_id" varchar,
  	"settings_custom_class_name" varchar,
  	"settings_viewport" "enum_pages_blocks_section_settings_viewport" DEFAULT 'auto',
  	"settings_width_type" "enum_pages_blocks_section_settings_width_type" DEFAULT 'boxed',
  	"settings_alignment" "enum_pages_blocks_section_settings_alignment" DEFAULT 'top',
  	"settings_container_type" "enum_pages_blocks_section_settings_container_type" DEFAULT 'container',
  	"settings_spacing_padding_top" "enum_pages_blocks_section_settings_spacing_padding_top" DEFAULT 'none',
  	"settings_spacing_padding_bottom" "enum_pages_blocks_section_settings_spacing_padding_bottom" DEFAULT 'none',
  	"settings_spacing_margin_top" "enum_pages_blocks_section_settings_spacing_margin_top" DEFAULT 'none',
  	"settings_spacing_margin_bottom" "enum_pages_blocks_section_settings_spacing_margin_bottom" DEFAULT 'none',
  	"settings_background_type" "enum_pages_blocks_section_settings_background_type" DEFAULT 'blank',
  	"settings_background_color_theme" varchar,
  	"settings_background_gradient_theme" "enum_pages_blocks_section_settings_background_gradient_theme",
  	"settings_background_image_id" integer,
  	"settings_background_video_id" integer,
  	"settings_background_overlay_enabled" boolean DEFAULT false,
  	"settings_background_overlay_color" varchar,
  	"settings_background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "posts_blocks_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"menu_id" integer NOT NULL,
  	"orientation" "enum_posts_blocks_menu_orientation" DEFAULT 'horizontal',
  	"variant" "enum_posts_blocks_menu_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_posts_blocks_heading_variant" DEFAULT 'default',
  	"title_tag" "enum_posts_blocks_heading_title_tag" DEFAULT 'h2',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"variant" "enum_posts_blocks_rich_text_variant" DEFAULT 'default',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_posts_blocks_image_link_type" DEFAULT 'none',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"aspect_ratio" "enum_posts_blocks_image_aspect_ratio" DEFAULT 'auto',
  	"custom_aspect_ratio" varchar,
  	"overlay_enabled" boolean DEFAULT false,
  	"overlay_color" varchar,
  	"overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source_type" "enum_posts_blocks_video_source_type" DEFAULT 'upload',
  	"file_id" integer,
  	"poster_id" integer,
  	"url" varchar,
  	"aspect_ratio" "enum_posts_blocks_video_aspect_ratio" DEFAULT '16/9',
  	"custom_aspect_ratio" varchar,
  	"controls" boolean DEFAULT true,
  	"autoplay" boolean DEFAULT false,
  	"loop" boolean DEFAULT false,
  	"muted" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"link_type" "enum_posts_blocks_button_link_type" DEFAULT 'internal',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"variant" "enum_posts_blocks_button_variant" DEFAULT 'primary',
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_posts_blocks_button_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_posts_blocks_button_icon_position" DEFAULT 'right',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_active" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_posts_blocks_tabs_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_posts_blocks_tabs_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "posts_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_posts_blocks_tabs_orientation" DEFAULT 'horizontal',
  	"variant" "enum_posts_blocks_tabs_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_tabs_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_tabs_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_tabs_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_tabs_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE "posts_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_orientation" "enum_posts_blocks_slider_settings_orientation" DEFAULT 'horizontal',
  	"settings_space_between" numeric DEFAULT 20,
  	"settings_slides_per_view" numeric DEFAULT 1,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_slider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_slider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_slider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_slider_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_slider_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_slider_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_open" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_posts_blocks_accordion_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_posts_blocks_accordion_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "posts_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"allow_multiple" boolean DEFAULT false,
  	"variant" "enum_posts_blocks_accordion_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_accordion_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_accordion_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_accordion_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_accordion_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_accordion_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_accordion_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"alignment" "enum_posts_blocks_cta_alignment" DEFAULT 'center',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_cta_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_cta_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_cta_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_cta_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_cta_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_cta_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_hero_trust_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_hero_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"highlighted_title" varchar,
  	"description" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_hero_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_hero_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_hero_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_hero_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_hero_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_hero_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_posts_blocks_services_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_posts_blocks_services_items_icon_position" DEFAULT 'right',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "posts_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_services_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_services_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_services_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_services_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_services_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_services_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "posts_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_process_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_process_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_process_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_process_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_process_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_process_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_gallery_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"category" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE "posts_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"all_label" varchar DEFAULT 'All',
  	"initial_count" numeric DEFAULT 12,
  	"show_all_label" varchar DEFAULT 'Show all',
  	"show_less_label" varchar DEFAULT 'Show less',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_gallery_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_gallery_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_gallery_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_gallery_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_gallery_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_gallery_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_instagram_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Instagram',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"instagram_handle" varchar,
  	"instagram_url" varchar NOT NULL,
  	"elfsight_widget_id" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_instagram_strip_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_instagram_strip_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_instagram_strip_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_instagram_strip_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_instagram_strip_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_instagram_strip_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "posts_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Kontakt',
  	"title" varchar NOT NULL,
  	"card_script_text" varchar,
  	"card_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_contact_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_contact_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_contact_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_contact_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_contact_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_contact_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_navbar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"menu_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_footer_columns_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_footer_columns_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_footer_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"description" varchar,
  	"bottom_text" varchar,
  	"bottom_secondary_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_about_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"image_position" "enum_posts_blocks_about_image_position" DEFAULT 'left',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_about_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_about_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_about_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_about_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_about_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_about_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_pricing_price_blocks_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_pricing_price_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"small_rows" boolean DEFAULT false
  );
  
  CREATE TABLE "posts_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"note" varchar,
  	"button_text" varchar NOT NULL,
  	"button_link_type" "enum_posts_blocks_pricing_button_link_type" DEFAULT 'internal',
  	"button_internal_link_id" integer,
  	"button_external_url" varchar,
  	"button_new_tab" boolean DEFAULT false,
  	"button_variant" "enum_posts_blocks_pricing_button_variant" DEFAULT 'primary',
  	"button_has_icon" boolean DEFAULT false,
  	"button_icon_type" "enum_posts_blocks_pricing_button_icon_type" DEFAULT 'picker',
  	"button_icon" varchar,
  	"button_custom_svg_id" integer,
  	"button_icon_position" "enum_posts_blocks_pricing_button_icon_position" DEFAULT 'right',
  	"button_html_id" varchar,
  	"button_custom_class_name" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_pricing_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_pricing_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_pricing_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_pricing_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_pricing_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_pricing_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"default_open" boolean DEFAULT false
  );
  
  CREATE TABLE "posts_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"allow_multiple" boolean DEFAULT true,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_faq_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_faq_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_faq_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_faq_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_faq_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_faq_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "posts_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"layout" "enum_posts_blocks_testimonials_layout" DEFAULT 'grid',
  	"columns" "enum_posts_blocks_testimonials_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_testimonials_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_testimonials_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_testimonials_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_testimonials_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_testimonials_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_testimonials_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_posts_blocks_stats_columns" DEFAULT 'col-4',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_stats_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_stats_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_stats_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_stats_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_stats_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_stats_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_team_items_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_posts_blocks_team_items_social_links_platform" DEFAULT 'link',
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_team_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"bio" varchar
  );
  
  CREATE TABLE "posts_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_posts_blocks_team_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_posts_blocks_team_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_posts_blocks_team_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_posts_blocks_team_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_posts_blocks_team_grid_variant" DEFAULT 'auto',
  	"gap" "enum_posts_blocks_team_gap" DEFAULT 'none',
  	"spacing_padding_top" "enum_posts_blocks_team_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_team_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_team_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_team_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_team_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_team_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_form_block_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_form_block_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_form_block_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_form_block_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_posts_blocks_form_block_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_posts_blocks_form_block_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"line_style" "enum_posts_blocks_divider_line_style" DEFAULT 'solid',
  	"thickness" "enum_posts_blocks_divider_thickness" DEFAULT 'thin',
  	"color_theme" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_posts_blocks_divider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_posts_blocks_divider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_posts_blocks_divider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_posts_blocks_divider_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_block_holder2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_posts_blocks_block_holder2_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_posts_blocks_block_holder2_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_posts_blocks_block_holder2_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_posts_blocks_block_holder2_grid_variant" DEFAULT 'auto',
  	"gap" "enum_posts_blocks_block_holder2_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_block_holder1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_posts_blocks_block_holder1_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_posts_blocks_block_holder1_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_posts_blocks_block_holder1_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_posts_blocks_block_holder1_grid_variant" DEFAULT 'auto',
  	"gap" "enum_posts_blocks_block_holder1_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_block_holder0" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_posts_blocks_block_holder0_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_posts_blocks_block_holder0_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_posts_blocks_block_holder0_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_posts_blocks_block_holder0_grid_variant" DEFAULT 'auto',
  	"gap" "enum_posts_blocks_block_holder0_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_posts_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"populate_by" "enum_posts_blocks_posts_block_populate_by" DEFAULT 'latest',
  	"limit" numeric DEFAULT 3 NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_posts_blocks_posts_block_layout" DEFAULT 'grid',
  	"gap" "enum_posts_blocks_posts_block_gap" DEFAULT 'none',
  	"grid_columns" "enum_posts_blocks_posts_block_grid_columns" DEFAULT 'col-3',
  	"autoplay" boolean DEFAULT false,
  	"show_arrows" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_html_id" varchar,
  	"settings_custom_class_name" varchar,
  	"settings_viewport" "enum_posts_blocks_section_settings_viewport" DEFAULT 'auto',
  	"settings_width_type" "enum_posts_blocks_section_settings_width_type" DEFAULT 'boxed',
  	"settings_alignment" "enum_posts_blocks_section_settings_alignment" DEFAULT 'top',
  	"settings_container_type" "enum_posts_blocks_section_settings_container_type" DEFAULT 'container',
  	"settings_spacing_padding_top" "enum_posts_blocks_section_settings_spacing_padding_top" DEFAULT 'none',
  	"settings_spacing_padding_bottom" "enum_posts_blocks_section_settings_spacing_padding_bottom" DEFAULT 'none',
  	"settings_spacing_margin_top" "enum_posts_blocks_section_settings_spacing_margin_top" DEFAULT 'none',
  	"settings_spacing_margin_bottom" "enum_posts_blocks_section_settings_spacing_margin_bottom" DEFAULT 'none',
  	"settings_background_type" "enum_posts_blocks_section_settings_background_type" DEFAULT 'blank',
  	"settings_background_color_theme" varchar,
  	"settings_background_gradient_theme" "enum_posts_blocks_section_settings_background_gradient_theme",
  	"settings_background_image_id" integer,
  	"settings_background_video_id" integer,
  	"settings_background_overlay_enabled" boolean DEFAULT false,
  	"settings_background_overlay_color" varchar,
  	"settings_background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"featured_image_id" integer,
  	"excerpt" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "menus_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"page_id" integer,
  	"anchor" varchar,
  	"url" varchar,
  	"label" varchar NOT NULL,
  	"type" "enum_menus_items_children_type" DEFAULT 'internal',
  	"new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "menus_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"page_id" integer,
  	"anchor" varchar,
  	"url" varchar,
  	"label" varchar,
  	"type" "enum_menus_items_type" DEFAULT 'internal',
  	"new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "menus" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"orientation" "enum_menus_orientation" DEFAULT 'horizontal',
  	"variant" "enum_menus_variant" DEFAULT 'default',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_type" "enum_forms_redirect_type" DEFAULT 'reference',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "forms_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"menus_id" integer,
  	"users_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "colors_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"hex" varchar
  );
  
  CREATE TABLE "colors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_blocks_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"menu_id" integer NOT NULL,
  	"orientation" "enum_header_blocks_menu_orientation" DEFAULT 'horizontal',
  	"variant" "enum_header_blocks_menu_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_header_blocks_heading_variant" DEFAULT 'default',
  	"title_tag" "enum_header_blocks_heading_title_tag" DEFAULT 'h2',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"variant" "enum_header_blocks_rich_text_variant" DEFAULT 'default',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_header_blocks_image_link_type" DEFAULT 'none',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"aspect_ratio" "enum_header_blocks_image_aspect_ratio" DEFAULT 'auto',
  	"custom_aspect_ratio" varchar,
  	"overlay_enabled" boolean DEFAULT false,
  	"overlay_color" varchar,
  	"overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source_type" "enum_header_blocks_video_source_type" DEFAULT 'upload',
  	"file_id" integer,
  	"poster_id" integer,
  	"url" varchar,
  	"aspect_ratio" "enum_header_blocks_video_aspect_ratio" DEFAULT '16/9',
  	"custom_aspect_ratio" varchar,
  	"controls" boolean DEFAULT true,
  	"autoplay" boolean DEFAULT false,
  	"loop" boolean DEFAULT false,
  	"muted" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"link_type" "enum_header_blocks_button_link_type" DEFAULT 'internal',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"variant" "enum_header_blocks_button_variant" DEFAULT 'primary',
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_header_blocks_button_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_header_blocks_button_icon_position" DEFAULT 'right',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_active" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_header_blocks_tabs_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_header_blocks_tabs_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "header_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_header_blocks_tabs_orientation" DEFAULT 'horizontal',
  	"variant" "enum_header_blocks_tabs_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_tabs_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_tabs_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_tabs_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_tabs_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE "header_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_orientation" "enum_header_blocks_slider_settings_orientation" DEFAULT 'horizontal',
  	"settings_space_between" numeric DEFAULT 20,
  	"settings_slides_per_view" numeric DEFAULT 1,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_slider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_slider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_slider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_slider_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_slider_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_slider_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_open" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_header_blocks_accordion_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_header_blocks_accordion_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "header_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"allow_multiple" boolean DEFAULT false,
  	"variant" "enum_header_blocks_accordion_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_accordion_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_accordion_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_accordion_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_accordion_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_accordion_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_accordion_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"alignment" "enum_header_blocks_cta_alignment" DEFAULT 'center',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_cta_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_cta_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_cta_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_cta_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_cta_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_cta_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_hero_trust_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_hero_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "header_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"highlighted_title" varchar,
  	"description" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_hero_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_hero_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_hero_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_hero_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_hero_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_hero_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_header_blocks_services_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_header_blocks_services_items_icon_position" DEFAULT 'right',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "header_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_services_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_services_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_services_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_services_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_services_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_services_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "header_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_process_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_process_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_process_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_process_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_process_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_process_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_gallery_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"category" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE "header_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"all_label" varchar DEFAULT 'All',
  	"initial_count" numeric DEFAULT 12,
  	"show_all_label" varchar DEFAULT 'Show all',
  	"show_less_label" varchar DEFAULT 'Show less',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_gallery_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_gallery_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_gallery_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_gallery_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_gallery_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_gallery_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_instagram_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Instagram',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"instagram_handle" varchar,
  	"instagram_url" varchar NOT NULL,
  	"elfsight_widget_id" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_instagram_strip_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_instagram_strip_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_instagram_strip_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_instagram_strip_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_instagram_strip_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_instagram_strip_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "header_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Kontakt',
  	"title" varchar NOT NULL,
  	"card_script_text" varchar,
  	"card_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_contact_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_contact_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_contact_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_contact_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_contact_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_contact_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_navbar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"menu_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_footer_columns_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_footer_columns_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_footer_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"description" varchar,
  	"bottom_text" varchar,
  	"bottom_secondary_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_about_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"image_position" "enum_header_blocks_about_image_position" DEFAULT 'left',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_about_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_about_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_about_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_about_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_about_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_about_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_pricing_price_blocks_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_pricing_price_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"small_rows" boolean DEFAULT false
  );
  
  CREATE TABLE "header_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"note" varchar,
  	"button_text" varchar NOT NULL,
  	"button_link_type" "enum_header_blocks_pricing_button_link_type" DEFAULT 'internal',
  	"button_internal_link_id" integer,
  	"button_external_url" varchar,
  	"button_new_tab" boolean DEFAULT false,
  	"button_variant" "enum_header_blocks_pricing_button_variant" DEFAULT 'primary',
  	"button_has_icon" boolean DEFAULT false,
  	"button_icon_type" "enum_header_blocks_pricing_button_icon_type" DEFAULT 'picker',
  	"button_icon" varchar,
  	"button_custom_svg_id" integer,
  	"button_icon_position" "enum_header_blocks_pricing_button_icon_position" DEFAULT 'right',
  	"button_html_id" varchar,
  	"button_custom_class_name" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_pricing_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_pricing_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_pricing_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_pricing_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_pricing_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_pricing_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"default_open" boolean DEFAULT false
  );
  
  CREATE TABLE "header_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"allow_multiple" boolean DEFAULT true,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_faq_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_faq_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_faq_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_faq_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_faq_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_faq_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "header_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"layout" "enum_header_blocks_testimonials_layout" DEFAULT 'grid',
  	"columns" "enum_header_blocks_testimonials_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_testimonials_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_testimonials_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_testimonials_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_testimonials_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_testimonials_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_testimonials_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_header_blocks_stats_columns" DEFAULT 'col-4',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_stats_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_stats_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_stats_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_stats_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_stats_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_stats_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_team_items_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_header_blocks_team_items_social_links_platform" DEFAULT 'link',
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "header_blocks_team_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"bio" varchar
  );
  
  CREATE TABLE "header_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_header_blocks_team_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_header_blocks_team_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_header_blocks_team_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_header_blocks_team_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_header_blocks_team_grid_variant" DEFAULT 'auto',
  	"gap" "enum_header_blocks_team_gap" DEFAULT 'none',
  	"spacing_padding_top" "enum_header_blocks_team_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_team_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_team_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_team_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_team_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_team_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_form_block_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_form_block_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_form_block_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_form_block_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_header_blocks_form_block_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_header_blocks_form_block_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"line_style" "enum_header_blocks_divider_line_style" DEFAULT 'solid',
  	"thickness" "enum_header_blocks_divider_thickness" DEFAULT 'thin',
  	"color_theme" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_header_blocks_divider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_header_blocks_divider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_header_blocks_divider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_header_blocks_divider_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_block_holder2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_header_blocks_block_holder2_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_header_blocks_block_holder2_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_header_blocks_block_holder2_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_header_blocks_block_holder2_grid_variant" DEFAULT 'auto',
  	"gap" "enum_header_blocks_block_holder2_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_block_holder1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_header_blocks_block_holder1_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_header_blocks_block_holder1_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_header_blocks_block_holder1_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_header_blocks_block_holder1_grid_variant" DEFAULT 'auto',
  	"gap" "enum_header_blocks_block_holder1_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_block_holder0" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_header_blocks_block_holder0_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_header_blocks_block_holder0_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_header_blocks_block_holder0_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_header_blocks_block_holder0_grid_variant" DEFAULT 'auto',
  	"gap" "enum_header_blocks_block_holder0_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_posts_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"populate_by" "enum_header_blocks_posts_block_populate_by" DEFAULT 'latest',
  	"limit" numeric DEFAULT 3 NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_header_blocks_posts_block_layout" DEFAULT 'grid',
  	"gap" "enum_header_blocks_posts_block_gap" DEFAULT 'none',
  	"grid_columns" "enum_header_blocks_posts_block_grid_columns" DEFAULT 'col-3',
  	"autoplay" boolean DEFAULT false,
  	"show_arrows" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_html_id" varchar,
  	"settings_custom_class_name" varchar,
  	"settings_viewport" "enum_header_blocks_section_settings_viewport" DEFAULT 'auto',
  	"settings_width_type" "enum_header_blocks_section_settings_width_type" DEFAULT 'boxed',
  	"settings_alignment" "enum_header_blocks_section_settings_alignment" DEFAULT 'top',
  	"settings_container_type" "enum_header_blocks_section_settings_container_type" DEFAULT 'container',
  	"settings_spacing_padding_top" "enum_header_blocks_section_settings_spacing_padding_top" DEFAULT 'none',
  	"settings_spacing_padding_bottom" "enum_header_blocks_section_settings_spacing_padding_bottom" DEFAULT 'none',
  	"settings_spacing_margin_top" "enum_header_blocks_section_settings_spacing_margin_top" DEFAULT 'none',
  	"settings_spacing_margin_bottom" "enum_header_blocks_section_settings_spacing_margin_bottom" DEFAULT 'none',
  	"settings_background_type" "enum_header_blocks_section_settings_background_type" DEFAULT 'blank',
  	"settings_background_color_theme" varchar,
  	"settings_background_gradient_theme" "enum_header_blocks_section_settings_background_gradient_theme",
  	"settings_background_image_id" integer,
  	"settings_background_video_id" integer,
  	"settings_background_overlay_enabled" boolean DEFAULT false,
  	"settings_background_overlay_color" varchar,
  	"settings_background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum_header_variant" DEFAULT 'default',
  	"sticky" "enum_header_sticky" DEFAULT 'none',
  	"color_theme" varchar DEFAULT 'blush-soft',
  	"html_id" varchar,
  	"padding_top" numeric DEFAULT 10,
  	"padding_bottom" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_blocks_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"menu_id" integer NOT NULL,
  	"orientation" "enum_footer_blocks_menu_orientation" DEFAULT 'horizontal',
  	"variant" "enum_footer_blocks_menu_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_footer_blocks_heading_variant" DEFAULT 'default',
  	"title_tag" "enum_footer_blocks_heading_title_tag" DEFAULT 'h2',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"variant" "enum_footer_blocks_rich_text_variant" DEFAULT 'default',
  	"color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_footer_blocks_image_link_type" DEFAULT 'none',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"aspect_ratio" "enum_footer_blocks_image_aspect_ratio" DEFAULT 'auto',
  	"custom_aspect_ratio" varchar,
  	"overlay_enabled" boolean DEFAULT false,
  	"overlay_color" varchar,
  	"overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source_type" "enum_footer_blocks_video_source_type" DEFAULT 'upload',
  	"file_id" integer,
  	"poster_id" integer,
  	"url" varchar,
  	"aspect_ratio" "enum_footer_blocks_video_aspect_ratio" DEFAULT '16/9',
  	"custom_aspect_ratio" varchar,
  	"controls" boolean DEFAULT true,
  	"autoplay" boolean DEFAULT false,
  	"loop" boolean DEFAULT false,
  	"muted" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"link_type" "enum_footer_blocks_button_link_type" DEFAULT 'internal',
  	"internal_link_id" integer,
  	"external_url" varchar,
  	"new_tab" boolean DEFAULT false,
  	"variant" "enum_footer_blocks_button_variant" DEFAULT 'primary',
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_footer_blocks_button_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_footer_blocks_button_icon_position" DEFAULT 'right',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_active" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_footer_blocks_tabs_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_footer_blocks_tabs_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "footer_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_footer_blocks_tabs_orientation" DEFAULT 'horizontal',
  	"variant" "enum_footer_blocks_tabs_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_tabs_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_tabs_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_tabs_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_tabs_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE "footer_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_orientation" "enum_footer_blocks_slider_settings_orientation" DEFAULT 'horizontal',
  	"settings_space_between" numeric DEFAULT 20,
  	"settings_slides_per_view" numeric DEFAULT 1,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_slider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_slider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_slider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_slider_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_slider_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_slider_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"default_open" boolean DEFAULT false,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_footer_blocks_accordion_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_footer_blocks_accordion_items_icon_position" DEFAULT 'right'
  );
  
  CREATE TABLE "footer_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"allow_multiple" boolean DEFAULT false,
  	"variant" "enum_footer_blocks_accordion_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_accordion_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_accordion_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_accordion_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_accordion_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_accordion_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_accordion_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"alignment" "enum_footer_blocks_cta_alignment" DEFAULT 'center',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_cta_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_cta_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_cta_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_cta_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_cta_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_cta_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_hero_trust_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_hero_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"highlighted_title" varchar,
  	"description" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_hero_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_hero_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_hero_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_hero_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_hero_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_hero_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"has_icon" boolean DEFAULT false,
  	"icon_type" "enum_footer_blocks_services_items_icon_type" DEFAULT 'picker',
  	"icon" varchar,
  	"custom_svg_id" integer,
  	"icon_position" "enum_footer_blocks_services_items_icon_position" DEFAULT 'right',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "footer_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_services_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_services_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_services_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_services_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_services_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_services_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "footer_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"title_line2" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_process_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_process_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_process_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_process_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_process_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_process_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_gallery_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"category" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE "footer_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"all_label" varchar DEFAULT 'All',
  	"initial_count" numeric DEFAULT 12,
  	"show_all_label" varchar DEFAULT 'Show all',
  	"show_less_label" varchar DEFAULT 'Show less',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_gallery_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_gallery_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_gallery_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_gallery_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_gallery_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_gallery_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_instagram_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Instagram',
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"instagram_handle" varchar,
  	"instagram_url" varchar NOT NULL,
  	"elfsight_widget_id" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_instagram_strip_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_instagram_strip_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_instagram_strip_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_instagram_strip_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_instagram_strip_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_instagram_strip_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "footer_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Kontakt',
  	"title" varchar NOT NULL,
  	"card_script_text" varchar,
  	"card_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_contact_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_contact_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_contact_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_contact_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_contact_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_contact_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_navbar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"menu_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_footer_columns_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_footer_columns_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_footer_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"brand_name" varchar NOT NULL,
  	"brand_sub" varchar,
  	"description" varchar,
  	"bottom_text" varchar,
  	"bottom_secondary_text" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_about_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"image_position" "enum_footer_blocks_about_image_position" DEFAULT 'left',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_about_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_about_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_about_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_about_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_about_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_about_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_pricing_price_blocks_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_pricing_price_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"small_rows" boolean DEFAULT false
  );
  
  CREATE TABLE "footer_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"note" varchar,
  	"button_text" varchar NOT NULL,
  	"button_link_type" "enum_footer_blocks_pricing_button_link_type" DEFAULT 'internal',
  	"button_internal_link_id" integer,
  	"button_external_url" varchar,
  	"button_new_tab" boolean DEFAULT false,
  	"button_variant" "enum_footer_blocks_pricing_button_variant" DEFAULT 'primary',
  	"button_has_icon" boolean DEFAULT false,
  	"button_icon_type" "enum_footer_blocks_pricing_button_icon_type" DEFAULT 'picker',
  	"button_icon" varchar,
  	"button_custom_svg_id" integer,
  	"button_icon_position" "enum_footer_blocks_pricing_button_icon_position" DEFAULT 'right',
  	"button_html_id" varchar,
  	"button_custom_class_name" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_pricing_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_pricing_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_pricing_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_pricing_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_pricing_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_pricing_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"default_open" boolean DEFAULT false
  );
  
  CREATE TABLE "footer_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"allow_multiple" boolean DEFAULT true,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_faq_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_faq_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_faq_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_faq_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_faq_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_faq_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "footer_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"layout" "enum_footer_blocks_testimonials_layout" DEFAULT 'grid',
  	"columns" "enum_footer_blocks_testimonials_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_testimonials_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_testimonials_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_testimonials_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_testimonials_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_testimonials_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_testimonials_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_footer_blocks_stats_columns" DEFAULT 'col-4',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_stats_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_stats_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_stats_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_stats_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_stats_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_stats_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_team_items_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_blocks_team_items_social_links_platform" DEFAULT 'link',
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_blocks_team_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"bio" varchar
  );
  
  CREATE TABLE "footer_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_footer_blocks_team_columns" DEFAULT 'col-3',
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_footer_blocks_team_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_footer_blocks_team_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_footer_blocks_team_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_footer_blocks_team_grid_variant" DEFAULT 'auto',
  	"gap" "enum_footer_blocks_team_gap" DEFAULT 'none',
  	"spacing_padding_top" "enum_footer_blocks_team_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_team_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_team_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_team_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_team_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_team_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_form_block_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_form_block_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_form_block_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_form_block_spacing_margin_bottom" DEFAULT 'none',
  	"background_type" "enum_footer_blocks_form_block_background_type" DEFAULT 'blank',
  	"background_color_theme" varchar,
  	"background_gradient_theme" "enum_footer_blocks_form_block_background_gradient_theme",
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"background_overlay_enabled" boolean DEFAULT false,
  	"background_overlay_color" varchar,
  	"background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"line_style" "enum_footer_blocks_divider_line_style" DEFAULT 'solid',
  	"thickness" "enum_footer_blocks_divider_thickness" DEFAULT 'thin',
  	"color_theme" varchar,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"spacing_padding_top" "enum_footer_blocks_divider_spacing_padding_top" DEFAULT 'none',
  	"spacing_padding_bottom" "enum_footer_blocks_divider_spacing_padding_bottom" DEFAULT 'none',
  	"spacing_margin_top" "enum_footer_blocks_divider_spacing_margin_top" DEFAULT 'none',
  	"spacing_margin_bottom" "enum_footer_blocks_divider_spacing_margin_bottom" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_block_holder2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_footer_blocks_block_holder2_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_footer_blocks_block_holder2_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_footer_blocks_block_holder2_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_footer_blocks_block_holder2_grid_variant" DEFAULT 'auto',
  	"gap" "enum_footer_blocks_block_holder2_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_block_holder1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_footer_blocks_block_holder1_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_footer_blocks_block_holder1_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_footer_blocks_block_holder1_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_footer_blocks_block_holder1_grid_variant" DEFAULT 'auto',
  	"gap" "enum_footer_blocks_block_holder1_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_block_holder0" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_footer_blocks_block_holder0_layout" DEFAULT 'block',
  	"vertical_alignment" "enum_footer_blocks_block_holder0_vertical_alignment" DEFAULT 'top',
  	"flex_variant" "enum_footer_blocks_block_holder0_flex_variant" DEFAULT 'row',
  	"grid_variant" "enum_footer_blocks_block_holder0_grid_variant" DEFAULT 'auto',
  	"gap" "enum_footer_blocks_block_holder0_gap" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_posts_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"populate_by" "enum_footer_blocks_posts_block_populate_by" DEFAULT 'latest',
  	"limit" numeric DEFAULT 3 NOT NULL,
  	"html_id" varchar,
  	"custom_class_name" varchar,
  	"layout" "enum_footer_blocks_posts_block_layout" DEFAULT 'grid',
  	"gap" "enum_footer_blocks_posts_block_gap" DEFAULT 'none',
  	"grid_columns" "enum_footer_blocks_posts_block_grid_columns" DEFAULT 'col-3',
  	"autoplay" boolean DEFAULT false,
  	"show_arrows" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_html_id" varchar,
  	"settings_custom_class_name" varchar,
  	"settings_viewport" "enum_footer_blocks_section_settings_viewport" DEFAULT 'auto',
  	"settings_width_type" "enum_footer_blocks_section_settings_width_type" DEFAULT 'boxed',
  	"settings_alignment" "enum_footer_blocks_section_settings_alignment" DEFAULT 'top',
  	"settings_container_type" "enum_footer_blocks_section_settings_container_type" DEFAULT 'container',
  	"settings_spacing_padding_top" "enum_footer_blocks_section_settings_spacing_padding_top" DEFAULT 'none',
  	"settings_spacing_padding_bottom" "enum_footer_blocks_section_settings_spacing_padding_bottom" DEFAULT 'none',
  	"settings_spacing_margin_top" "enum_footer_blocks_section_settings_spacing_margin_top" DEFAULT 'none',
  	"settings_spacing_margin_bottom" "enum_footer_blocks_section_settings_spacing_margin_bottom" DEFAULT 'none',
  	"settings_background_type" "enum_footer_blocks_section_settings_background_type" DEFAULT 'blank',
  	"settings_background_color_theme" varchar,
  	"settings_background_gradient_theme" "enum_footer_blocks_section_settings_background_gradient_theme",
  	"settings_background_image_id" integer,
  	"settings_background_video_id" integer,
  	"settings_background_overlay_enabled" boolean DEFAULT false,
  	"settings_background_overlay_color" varchar,
  	"settings_background_overlay_opacity" numeric DEFAULT 50,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum_footer_variant" DEFAULT 'default',
  	"html_id" varchar,
  	"color_theme" varchar,
  	"padding_top" numeric DEFAULT 10,
  	"padding_bottom" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_title" varchar NOT NULL,
  	"tagline" varchar,
  	"logo_id" integer,
  	"logo_dark_id" integer,
  	"mobile_cta_enabled" boolean DEFAULT true,
  	"color_theme" varchar,
  	"instagram_url" varchar,
  	"instagram_label" varchar DEFAULT 'Piši DM',
  	"phone" varchar,
  	"phone_label" varchar DEFAULT 'Pozovi',
  	"favicon_id" integer,
  	"apple_touch_icon_id" integer,
  	"default_meta_title" varchar,
  	"default_meta_description" varchar,
  	"default_meta_og_image_id" integer,
  	"title_template" varchar DEFAULT '%s | %site',
  	"robots" "enum_site_settings_robots" DEFAULT 'index, follow',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_menu" ADD CONSTRAINT "pages_blocks_menu_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_menu" ADD CONSTRAINT "pages_blocks_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_heading" ADD CONSTRAINT "pages_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button" ADD CONSTRAINT "pages_blocks_button_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_button" ADD CONSTRAINT "pages_blocks_button_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_button" ADD CONSTRAINT "pages_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_items" ADD CONSTRAINT "pages_blocks_tabs_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_items" ADD CONSTRAINT "pages_blocks_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs" ADD CONSTRAINT "pages_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider_slides" ADD CONSTRAINT "pages_blocks_slider_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider_slides" ADD CONSTRAINT "pages_blocks_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider" ADD CONSTRAINT "pages_blocks_slider_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider" ADD CONSTRAINT "pages_blocks_slider_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider" ADD CONSTRAINT "pages_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_items" ADD CONSTRAINT "pages_blocks_accordion_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_items" ADD CONSTRAINT "pages_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion" ADD CONSTRAINT "pages_blocks_accordion_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion" ADD CONSTRAINT "pages_blocks_accordion_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion" ADD CONSTRAINT "pages_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_trust_items" ADD CONSTRAINT "pages_blocks_hero_trust_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_images" ADD CONSTRAINT "pages_blocks_hero_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_images" ADD CONSTRAINT "pages_blocks_hero_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_items" ADD CONSTRAINT "pages_blocks_services_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_items" ADD CONSTRAINT "pages_blocks_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps" ADD CONSTRAINT "pages_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_categories" ADD CONSTRAINT "pages_blocks_gallery_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items" ADD CONSTRAINT "pages_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items" ADD CONSTRAINT "pages_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_instagram_strip" ADD CONSTRAINT "pages_blocks_instagram_strip_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_instagram_strip" ADD CONSTRAINT "pages_blocks_instagram_strip_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_instagram_strip" ADD CONSTRAINT "pages_blocks_instagram_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_items" ADD CONSTRAINT "pages_blocks_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar" ADD CONSTRAINT "pages_blocks_navbar_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar" ADD CONSTRAINT "pages_blocks_navbar_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar" ADD CONSTRAINT "pages_blocks_navbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_columns_social" ADD CONSTRAINT "pages_blocks_footer_columns_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_columns_columns_links" ADD CONSTRAINT "pages_blocks_footer_columns_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_columns_columns" ADD CONSTRAINT "pages_blocks_footer_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_columns" ADD CONSTRAINT "pages_blocks_footer_columns_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_columns" ADD CONSTRAINT "pages_blocks_footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_facts" ADD CONSTRAINT "pages_blocks_about_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_price_blocks_rows" ADD CONSTRAINT "pages_blocks_pricing_price_blocks_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_price_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_price_blocks" ADD CONSTRAINT "pages_blocks_pricing_price_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_button_internal_link_id_pages_id_fk" FOREIGN KEY ("button_internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_button_custom_svg_id_media_id_fk" FOREIGN KEY ("button_custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items" ADD CONSTRAINT "pages_blocks_testimonials_items_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items" ADD CONSTRAINT "pages_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_items" ADD CONSTRAINT "pages_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_items_social_links" ADD CONSTRAINT "pages_blocks_team_items_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_items" ADD CONSTRAINT "pages_blocks_team_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_items" ADD CONSTRAINT "pages_blocks_team_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_divider" ADD CONSTRAINT "pages_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_block_holder2" ADD CONSTRAINT "pages_blocks_block_holder2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_block_holder1" ADD CONSTRAINT "pages_blocks_block_holder1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_block_holder0" ADD CONSTRAINT "pages_blocks_block_holder0_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts_block" ADD CONSTRAINT "pages_blocks_posts_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_settings_background_image_id_media_id_fk" FOREIGN KEY ("settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_settings_background_video_id_media_id_fk" FOREIGN KEY ("settings_background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_menu" ADD CONSTRAINT "posts_blocks_menu_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_menu" ADD CONSTRAINT "posts_blocks_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_heading" ADD CONSTRAINT "posts_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_rich_text" ADD CONSTRAINT "posts_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_image" ADD CONSTRAINT "posts_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_image" ADD CONSTRAINT "posts_blocks_image_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_image" ADD CONSTRAINT "posts_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_video" ADD CONSTRAINT "posts_blocks_video_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_video" ADD CONSTRAINT "posts_blocks_video_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_video" ADD CONSTRAINT "posts_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_button" ADD CONSTRAINT "posts_blocks_button_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_button" ADD CONSTRAINT "posts_blocks_button_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_button" ADD CONSTRAINT "posts_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs_items" ADD CONSTRAINT "posts_blocks_tabs_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs_items" ADD CONSTRAINT "posts_blocks_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs" ADD CONSTRAINT "posts_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_slider_slides" ADD CONSTRAINT "posts_blocks_slider_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_slider_slides" ADD CONSTRAINT "posts_blocks_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_slider" ADD CONSTRAINT "posts_blocks_slider_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_slider" ADD CONSTRAINT "posts_blocks_slider_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_slider" ADD CONSTRAINT "posts_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_accordion_items" ADD CONSTRAINT "posts_blocks_accordion_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_accordion_items" ADD CONSTRAINT "posts_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_accordion" ADD CONSTRAINT "posts_blocks_accordion_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_accordion" ADD CONSTRAINT "posts_blocks_accordion_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_accordion" ADD CONSTRAINT "posts_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta" ADD CONSTRAINT "posts_blocks_cta_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta" ADD CONSTRAINT "posts_blocks_cta_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta" ADD CONSTRAINT "posts_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero_trust_items" ADD CONSTRAINT "posts_blocks_hero_trust_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero_images" ADD CONSTRAINT "posts_blocks_hero_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero_images" ADD CONSTRAINT "posts_blocks_hero_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero" ADD CONSTRAINT "posts_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero" ADD CONSTRAINT "posts_blocks_hero_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero" ADD CONSTRAINT "posts_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_services_items" ADD CONSTRAINT "posts_blocks_services_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_services_items" ADD CONSTRAINT "posts_blocks_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_services" ADD CONSTRAINT "posts_blocks_services_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_services" ADD CONSTRAINT "posts_blocks_services_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_services" ADD CONSTRAINT "posts_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_process_steps" ADD CONSTRAINT "posts_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_process" ADD CONSTRAINT "posts_blocks_process_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_process" ADD CONSTRAINT "posts_blocks_process_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_process" ADD CONSTRAINT "posts_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery_categories" ADD CONSTRAINT "posts_blocks_gallery_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery_items" ADD CONSTRAINT "posts_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery_items" ADD CONSTRAINT "posts_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery" ADD CONSTRAINT "posts_blocks_gallery_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery" ADD CONSTRAINT "posts_blocks_gallery_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery" ADD CONSTRAINT "posts_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_instagram_strip" ADD CONSTRAINT "posts_blocks_instagram_strip_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_instagram_strip" ADD CONSTRAINT "posts_blocks_instagram_strip_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_instagram_strip" ADD CONSTRAINT "posts_blocks_instagram_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_items" ADD CONSTRAINT "posts_blocks_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact" ADD CONSTRAINT "posts_blocks_contact_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact" ADD CONSTRAINT "posts_blocks_contact_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact" ADD CONSTRAINT "posts_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_navbar" ADD CONSTRAINT "posts_blocks_navbar_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_navbar" ADD CONSTRAINT "posts_blocks_navbar_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_navbar" ADD CONSTRAINT "posts_blocks_navbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_footer_columns_social" ADD CONSTRAINT "posts_blocks_footer_columns_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_footer_columns_columns_links" ADD CONSTRAINT "posts_blocks_footer_columns_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_footer_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_footer_columns_columns" ADD CONSTRAINT "posts_blocks_footer_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_footer_columns" ADD CONSTRAINT "posts_blocks_footer_columns_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_footer_columns" ADD CONSTRAINT "posts_blocks_footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_about_facts" ADD CONSTRAINT "posts_blocks_about_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_about" ADD CONSTRAINT "posts_blocks_about_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_about" ADD CONSTRAINT "posts_blocks_about_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_about" ADD CONSTRAINT "posts_blocks_about_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_about" ADD CONSTRAINT "posts_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing_price_blocks_rows" ADD CONSTRAINT "posts_blocks_pricing_price_blocks_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_pricing_price_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing_price_blocks" ADD CONSTRAINT "posts_blocks_pricing_price_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing" ADD CONSTRAINT "posts_blocks_pricing_button_internal_link_id_pages_id_fk" FOREIGN KEY ("button_internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing" ADD CONSTRAINT "posts_blocks_pricing_button_custom_svg_id_media_id_fk" FOREIGN KEY ("button_custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing" ADD CONSTRAINT "posts_blocks_pricing_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing" ADD CONSTRAINT "posts_blocks_pricing_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_pricing" ADD CONSTRAINT "posts_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq_items" ADD CONSTRAINT "posts_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq" ADD CONSTRAINT "posts_blocks_faq_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq" ADD CONSTRAINT "posts_blocks_faq_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq" ADD CONSTRAINT "posts_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials_items" ADD CONSTRAINT "posts_blocks_testimonials_items_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials_items" ADD CONSTRAINT "posts_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials" ADD CONSTRAINT "posts_blocks_testimonials_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials" ADD CONSTRAINT "posts_blocks_testimonials_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials" ADD CONSTRAINT "posts_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_items" ADD CONSTRAINT "posts_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats" ADD CONSTRAINT "posts_blocks_stats_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats" ADD CONSTRAINT "posts_blocks_stats_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats" ADD CONSTRAINT "posts_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_team_items_social_links" ADD CONSTRAINT "posts_blocks_team_items_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_team_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_team_items" ADD CONSTRAINT "posts_blocks_team_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_team_items" ADD CONSTRAINT "posts_blocks_team_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_team" ADD CONSTRAINT "posts_blocks_team_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_team" ADD CONSTRAINT "posts_blocks_team_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_team" ADD CONSTRAINT "posts_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_form_block" ADD CONSTRAINT "posts_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_form_block" ADD CONSTRAINT "posts_blocks_form_block_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_form_block" ADD CONSTRAINT "posts_blocks_form_block_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_form_block" ADD CONSTRAINT "posts_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_divider" ADD CONSTRAINT "posts_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_block_holder2" ADD CONSTRAINT "posts_blocks_block_holder2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_block_holder1" ADD CONSTRAINT "posts_blocks_block_holder1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_block_holder0" ADD CONSTRAINT "posts_blocks_block_holder0_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_posts_block" ADD CONSTRAINT "posts_blocks_posts_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_section" ADD CONSTRAINT "posts_blocks_section_settings_background_image_id_media_id_fk" FOREIGN KEY ("settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_section" ADD CONSTRAINT "posts_blocks_section_settings_background_video_id_media_id_fk" FOREIGN KEY ("settings_background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_section" ADD CONSTRAINT "posts_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menus_items_children" ADD CONSTRAINT "menus_items_children_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "menus_items_children" ADD CONSTRAINT "menus_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menus_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menus_items" ADD CONSTRAINT "menus_items_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "menus_items" ADD CONSTRAINT "menus_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_rels" ADD CONSTRAINT "forms_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_rels" ADD CONSTRAINT "forms_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_menus_fk" FOREIGN KEY ("menus_id") REFERENCES "public"."menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "colors_colors" ADD CONSTRAINT "colors_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."colors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_menu" ADD CONSTRAINT "header_blocks_menu_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_menu" ADD CONSTRAINT "header_blocks_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_heading" ADD CONSTRAINT "header_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_rich_text" ADD CONSTRAINT "header_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_image" ADD CONSTRAINT "header_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_image" ADD CONSTRAINT "header_blocks_image_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_image" ADD CONSTRAINT "header_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_video" ADD CONSTRAINT "header_blocks_video_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_video" ADD CONSTRAINT "header_blocks_video_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_video" ADD CONSTRAINT "header_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_button" ADD CONSTRAINT "header_blocks_button_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_button" ADD CONSTRAINT "header_blocks_button_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_button" ADD CONSTRAINT "header_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_tabs_items" ADD CONSTRAINT "header_blocks_tabs_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_tabs_items" ADD CONSTRAINT "header_blocks_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_tabs" ADD CONSTRAINT "header_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_slider_slides" ADD CONSTRAINT "header_blocks_slider_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_slider_slides" ADD CONSTRAINT "header_blocks_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_slider" ADD CONSTRAINT "header_blocks_slider_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_slider" ADD CONSTRAINT "header_blocks_slider_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_slider" ADD CONSTRAINT "header_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_accordion_items" ADD CONSTRAINT "header_blocks_accordion_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_accordion_items" ADD CONSTRAINT "header_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_accordion" ADD CONSTRAINT "header_blocks_accordion_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_accordion" ADD CONSTRAINT "header_blocks_accordion_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_accordion" ADD CONSTRAINT "header_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_cta" ADD CONSTRAINT "header_blocks_cta_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_cta" ADD CONSTRAINT "header_blocks_cta_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_cta" ADD CONSTRAINT "header_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_hero_trust_items" ADD CONSTRAINT "header_blocks_hero_trust_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_hero_images" ADD CONSTRAINT "header_blocks_hero_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_hero_images" ADD CONSTRAINT "header_blocks_hero_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_hero" ADD CONSTRAINT "header_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_hero" ADD CONSTRAINT "header_blocks_hero_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_hero" ADD CONSTRAINT "header_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_services_items" ADD CONSTRAINT "header_blocks_services_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_services_items" ADD CONSTRAINT "header_blocks_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_services" ADD CONSTRAINT "header_blocks_services_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_services" ADD CONSTRAINT "header_blocks_services_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_services" ADD CONSTRAINT "header_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_process_steps" ADD CONSTRAINT "header_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_process" ADD CONSTRAINT "header_blocks_process_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_process" ADD CONSTRAINT "header_blocks_process_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_process" ADD CONSTRAINT "header_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_gallery_categories" ADD CONSTRAINT "header_blocks_gallery_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_gallery_items" ADD CONSTRAINT "header_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_gallery_items" ADD CONSTRAINT "header_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_gallery" ADD CONSTRAINT "header_blocks_gallery_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_gallery" ADD CONSTRAINT "header_blocks_gallery_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_gallery" ADD CONSTRAINT "header_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_instagram_strip" ADD CONSTRAINT "header_blocks_instagram_strip_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_instagram_strip" ADD CONSTRAINT "header_blocks_instagram_strip_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_instagram_strip" ADD CONSTRAINT "header_blocks_instagram_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_contact_items" ADD CONSTRAINT "header_blocks_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_contact" ADD CONSTRAINT "header_blocks_contact_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_contact" ADD CONSTRAINT "header_blocks_contact_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_contact" ADD CONSTRAINT "header_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_navbar" ADD CONSTRAINT "header_blocks_navbar_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_navbar" ADD CONSTRAINT "header_blocks_navbar_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_navbar" ADD CONSTRAINT "header_blocks_navbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_footer_columns_social" ADD CONSTRAINT "header_blocks_footer_columns_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_footer_columns_columns_links" ADD CONSTRAINT "header_blocks_footer_columns_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_footer_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_footer_columns_columns" ADD CONSTRAINT "header_blocks_footer_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_footer_columns" ADD CONSTRAINT "header_blocks_footer_columns_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_footer_columns" ADD CONSTRAINT "header_blocks_footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_about_facts" ADD CONSTRAINT "header_blocks_about_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_about" ADD CONSTRAINT "header_blocks_about_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_about" ADD CONSTRAINT "header_blocks_about_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_about" ADD CONSTRAINT "header_blocks_about_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_about" ADD CONSTRAINT "header_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing_price_blocks_rows" ADD CONSTRAINT "header_blocks_pricing_price_blocks_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_pricing_price_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing_price_blocks" ADD CONSTRAINT "header_blocks_pricing_price_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing" ADD CONSTRAINT "header_blocks_pricing_button_internal_link_id_pages_id_fk" FOREIGN KEY ("button_internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing" ADD CONSTRAINT "header_blocks_pricing_button_custom_svg_id_media_id_fk" FOREIGN KEY ("button_custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing" ADD CONSTRAINT "header_blocks_pricing_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing" ADD CONSTRAINT "header_blocks_pricing_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_pricing" ADD CONSTRAINT "header_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_faq_items" ADD CONSTRAINT "header_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_faq" ADD CONSTRAINT "header_blocks_faq_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_faq" ADD CONSTRAINT "header_blocks_faq_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_faq" ADD CONSTRAINT "header_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_testimonials_items" ADD CONSTRAINT "header_blocks_testimonials_items_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_testimonials_items" ADD CONSTRAINT "header_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_testimonials" ADD CONSTRAINT "header_blocks_testimonials_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_testimonials" ADD CONSTRAINT "header_blocks_testimonials_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_testimonials" ADD CONSTRAINT "header_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_stats_items" ADD CONSTRAINT "header_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_stats" ADD CONSTRAINT "header_blocks_stats_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_stats" ADD CONSTRAINT "header_blocks_stats_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_stats" ADD CONSTRAINT "header_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_team_items_social_links" ADD CONSTRAINT "header_blocks_team_items_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_team_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_team_items" ADD CONSTRAINT "header_blocks_team_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_team_items" ADD CONSTRAINT "header_blocks_team_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_team" ADD CONSTRAINT "header_blocks_team_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_team" ADD CONSTRAINT "header_blocks_team_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_team" ADD CONSTRAINT "header_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_form_block" ADD CONSTRAINT "header_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_form_block" ADD CONSTRAINT "header_blocks_form_block_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_form_block" ADD CONSTRAINT "header_blocks_form_block_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_form_block" ADD CONSTRAINT "header_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_divider" ADD CONSTRAINT "header_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_block_holder2" ADD CONSTRAINT "header_blocks_block_holder2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_block_holder1" ADD CONSTRAINT "header_blocks_block_holder1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_block_holder0" ADD CONSTRAINT "header_blocks_block_holder0_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_posts_block" ADD CONSTRAINT "header_blocks_posts_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_section" ADD CONSTRAINT "header_blocks_section_settings_background_image_id_media_id_fk" FOREIGN KEY ("settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_section" ADD CONSTRAINT "header_blocks_section_settings_background_video_id_media_id_fk" FOREIGN KEY ("settings_background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_section" ADD CONSTRAINT "header_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_menu" ADD CONSTRAINT "footer_blocks_menu_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_menu" ADD CONSTRAINT "footer_blocks_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_heading" ADD CONSTRAINT "footer_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_rich_text" ADD CONSTRAINT "footer_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_image" ADD CONSTRAINT "footer_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_image" ADD CONSTRAINT "footer_blocks_image_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_image" ADD CONSTRAINT "footer_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_video" ADD CONSTRAINT "footer_blocks_video_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_video" ADD CONSTRAINT "footer_blocks_video_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_video" ADD CONSTRAINT "footer_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_button" ADD CONSTRAINT "footer_blocks_button_internal_link_id_pages_id_fk" FOREIGN KEY ("internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_button" ADD CONSTRAINT "footer_blocks_button_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_button" ADD CONSTRAINT "footer_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_tabs_items" ADD CONSTRAINT "footer_blocks_tabs_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_tabs_items" ADD CONSTRAINT "footer_blocks_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_tabs" ADD CONSTRAINT "footer_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_slider_slides" ADD CONSTRAINT "footer_blocks_slider_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_slider_slides" ADD CONSTRAINT "footer_blocks_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_slider" ADD CONSTRAINT "footer_blocks_slider_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_slider" ADD CONSTRAINT "footer_blocks_slider_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_slider" ADD CONSTRAINT "footer_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_accordion_items" ADD CONSTRAINT "footer_blocks_accordion_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_accordion_items" ADD CONSTRAINT "footer_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_accordion" ADD CONSTRAINT "footer_blocks_accordion_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_accordion" ADD CONSTRAINT "footer_blocks_accordion_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_accordion" ADD CONSTRAINT "footer_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_cta" ADD CONSTRAINT "footer_blocks_cta_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_cta" ADD CONSTRAINT "footer_blocks_cta_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_cta" ADD CONSTRAINT "footer_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_hero_trust_items" ADD CONSTRAINT "footer_blocks_hero_trust_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_hero_images" ADD CONSTRAINT "footer_blocks_hero_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_hero_images" ADD CONSTRAINT "footer_blocks_hero_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_hero" ADD CONSTRAINT "footer_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_hero" ADD CONSTRAINT "footer_blocks_hero_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_hero" ADD CONSTRAINT "footer_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_services_items" ADD CONSTRAINT "footer_blocks_services_items_custom_svg_id_media_id_fk" FOREIGN KEY ("custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_services_items" ADD CONSTRAINT "footer_blocks_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_services" ADD CONSTRAINT "footer_blocks_services_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_services" ADD CONSTRAINT "footer_blocks_services_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_services" ADD CONSTRAINT "footer_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_process_steps" ADD CONSTRAINT "footer_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_process" ADD CONSTRAINT "footer_blocks_process_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_process" ADD CONSTRAINT "footer_blocks_process_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_process" ADD CONSTRAINT "footer_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_gallery_categories" ADD CONSTRAINT "footer_blocks_gallery_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_gallery_items" ADD CONSTRAINT "footer_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_gallery_items" ADD CONSTRAINT "footer_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_gallery" ADD CONSTRAINT "footer_blocks_gallery_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_gallery" ADD CONSTRAINT "footer_blocks_gallery_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_gallery" ADD CONSTRAINT "footer_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_instagram_strip" ADD CONSTRAINT "footer_blocks_instagram_strip_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_instagram_strip" ADD CONSTRAINT "footer_blocks_instagram_strip_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_instagram_strip" ADD CONSTRAINT "footer_blocks_instagram_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_contact_items" ADD CONSTRAINT "footer_blocks_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_contact" ADD CONSTRAINT "footer_blocks_contact_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_contact" ADD CONSTRAINT "footer_blocks_contact_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_contact" ADD CONSTRAINT "footer_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_navbar" ADD CONSTRAINT "footer_blocks_navbar_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_navbar" ADD CONSTRAINT "footer_blocks_navbar_menu_id_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_navbar" ADD CONSTRAINT "footer_blocks_navbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_columns_social" ADD CONSTRAINT "footer_blocks_footer_columns_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_columns_columns_links" ADD CONSTRAINT "footer_blocks_footer_columns_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_footer_columns_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_columns_columns" ADD CONSTRAINT "footer_blocks_footer_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_columns" ADD CONSTRAINT "footer_blocks_footer_columns_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_columns" ADD CONSTRAINT "footer_blocks_footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_about_facts" ADD CONSTRAINT "footer_blocks_about_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_about" ADD CONSTRAINT "footer_blocks_about_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_about" ADD CONSTRAINT "footer_blocks_about_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_about" ADD CONSTRAINT "footer_blocks_about_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_about" ADD CONSTRAINT "footer_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing_price_blocks_rows" ADD CONSTRAINT "footer_blocks_pricing_price_blocks_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_pricing_price_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing_price_blocks" ADD CONSTRAINT "footer_blocks_pricing_price_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing" ADD CONSTRAINT "footer_blocks_pricing_button_internal_link_id_pages_id_fk" FOREIGN KEY ("button_internal_link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing" ADD CONSTRAINT "footer_blocks_pricing_button_custom_svg_id_media_id_fk" FOREIGN KEY ("button_custom_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing" ADD CONSTRAINT "footer_blocks_pricing_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing" ADD CONSTRAINT "footer_blocks_pricing_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_pricing" ADD CONSTRAINT "footer_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_faq_items" ADD CONSTRAINT "footer_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_faq" ADD CONSTRAINT "footer_blocks_faq_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_faq" ADD CONSTRAINT "footer_blocks_faq_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_faq" ADD CONSTRAINT "footer_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_testimonials_items" ADD CONSTRAINT "footer_blocks_testimonials_items_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_testimonials_items" ADD CONSTRAINT "footer_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_testimonials" ADD CONSTRAINT "footer_blocks_testimonials_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_testimonials" ADD CONSTRAINT "footer_blocks_testimonials_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_testimonials" ADD CONSTRAINT "footer_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_stats_items" ADD CONSTRAINT "footer_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_stats" ADD CONSTRAINT "footer_blocks_stats_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_stats" ADD CONSTRAINT "footer_blocks_stats_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_stats" ADD CONSTRAINT "footer_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_team_items_social_links" ADD CONSTRAINT "footer_blocks_team_items_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_team_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_team_items" ADD CONSTRAINT "footer_blocks_team_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_team_items" ADD CONSTRAINT "footer_blocks_team_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_team" ADD CONSTRAINT "footer_blocks_team_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_team" ADD CONSTRAINT "footer_blocks_team_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_team" ADD CONSTRAINT "footer_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_form_block" ADD CONSTRAINT "footer_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_form_block" ADD CONSTRAINT "footer_blocks_form_block_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_form_block" ADD CONSTRAINT "footer_blocks_form_block_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_form_block" ADD CONSTRAINT "footer_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_divider" ADD CONSTRAINT "footer_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_block_holder2" ADD CONSTRAINT "footer_blocks_block_holder2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_block_holder1" ADD CONSTRAINT "footer_blocks_block_holder1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_block_holder0" ADD CONSTRAINT "footer_blocks_block_holder0_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_posts_block" ADD CONSTRAINT "footer_blocks_posts_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_section" ADD CONSTRAINT "footer_blocks_section_settings_background_image_id_media_id_fk" FOREIGN KEY ("settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_section" ADD CONSTRAINT "footer_blocks_section_settings_background_video_id_media_id_fk" FOREIGN KEY ("settings_background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_section" ADD CONSTRAINT "footer_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_apple_touch_icon_id_media_id_fk" FOREIGN KEY ("apple_touch_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_meta_og_image_id_media_id_fk" FOREIGN KEY ("default_meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_menu_order_idx" ON "pages_blocks_menu" USING btree ("_order");
  CREATE INDEX "pages_blocks_menu_parent_id_idx" ON "pages_blocks_menu" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_menu_path_idx" ON "pages_blocks_menu" USING btree ("_path");
  CREATE INDEX "pages_blocks_menu_menu_idx" ON "pages_blocks_menu" USING btree ("menu_id");
  CREATE INDEX "pages_blocks_heading_order_idx" ON "pages_blocks_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_heading_parent_id_idx" ON "pages_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_heading_path_idx" ON "pages_blocks_heading" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_order_idx" ON "pages_blocks_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_parent_id_idx" ON "pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_path_idx" ON "pages_blocks_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_image_idx" ON "pages_blocks_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_image_internal_link_idx" ON "pages_blocks_image" USING btree ("internal_link_id");
  CREATE INDEX "pages_blocks_video_order_idx" ON "pages_blocks_video" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_parent_id_idx" ON "pages_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_path_idx" ON "pages_blocks_video" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_file_idx" ON "pages_blocks_video" USING btree ("file_id");
  CREATE INDEX "pages_blocks_video_poster_idx" ON "pages_blocks_video" USING btree ("poster_id");
  CREATE INDEX "pages_blocks_button_order_idx" ON "pages_blocks_button" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_parent_id_idx" ON "pages_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_path_idx" ON "pages_blocks_button" USING btree ("_path");
  CREATE INDEX "pages_blocks_button_internal_link_idx" ON "pages_blocks_button" USING btree ("internal_link_id");
  CREATE INDEX "pages_blocks_button_custom_svg_idx" ON "pages_blocks_button" USING btree ("custom_svg_id");
  CREATE INDEX "pages_blocks_tabs_items_order_idx" ON "pages_blocks_tabs_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_items_parent_id_idx" ON "pages_blocks_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_items_custom_svg_idx" ON "pages_blocks_tabs_items" USING btree ("custom_svg_id");
  CREATE INDEX "pages_blocks_tabs_order_idx" ON "pages_blocks_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_parent_id_idx" ON "pages_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_path_idx" ON "pages_blocks_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_slider_slides_order_idx" ON "pages_blocks_slider_slides" USING btree ("_order");
  CREATE INDEX "pages_blocks_slider_slides_parent_id_idx" ON "pages_blocks_slider_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_slider_slides_image_idx" ON "pages_blocks_slider_slides" USING btree ("image_id");
  CREATE INDEX "pages_blocks_slider_order_idx" ON "pages_blocks_slider" USING btree ("_order");
  CREATE INDEX "pages_blocks_slider_parent_id_idx" ON "pages_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_slider_path_idx" ON "pages_blocks_slider" USING btree ("_path");
  CREATE INDEX "pages_blocks_slider_background_background_image_idx" ON "pages_blocks_slider" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_slider_background_background_video_idx" ON "pages_blocks_slider" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_accordion_items_order_idx" ON "pages_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_items_parent_id_idx" ON "pages_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_items_custom_svg_idx" ON "pages_blocks_accordion_items" USING btree ("custom_svg_id");
  CREATE INDEX "pages_blocks_accordion_order_idx" ON "pages_blocks_accordion" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_parent_id_idx" ON "pages_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_path_idx" ON "pages_blocks_accordion" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_background_background_image_idx" ON "pages_blocks_accordion" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_accordion_background_background_video_idx" ON "pages_blocks_accordion" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_background_background_image_idx" ON "pages_blocks_cta" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_cta_background_background_video_idx" ON "pages_blocks_cta" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_hero_trust_items_order_idx" ON "pages_blocks_hero_trust_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_trust_items_parent_id_idx" ON "pages_blocks_hero_trust_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_images_order_idx" ON "pages_blocks_hero_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_images_parent_id_idx" ON "pages_blocks_hero_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_images_image_idx" ON "pages_blocks_hero_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_background_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_hero_background_background_video_idx" ON "pages_blocks_hero" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_services_items_order_idx" ON "pages_blocks_services_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_items_parent_id_idx" ON "pages_blocks_services_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_items_custom_svg_idx" ON "pages_blocks_services_items" USING btree ("custom_svg_id");
  CREATE INDEX "pages_blocks_services_order_idx" ON "pages_blocks_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_parent_id_idx" ON "pages_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_path_idx" ON "pages_blocks_services" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_background_background_image_idx" ON "pages_blocks_services" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_services_background_background_video_idx" ON "pages_blocks_services" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_process_steps_order_idx" ON "pages_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_parent_id_idx" ON "pages_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_order_idx" ON "pages_blocks_process" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_parent_id_idx" ON "pages_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_path_idx" ON "pages_blocks_process" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_background_background_image_idx" ON "pages_blocks_process" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_process_background_background_video_idx" ON "pages_blocks_process" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_gallery_categories_order_idx" ON "pages_blocks_gallery_categories" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_categories_parent_id_idx" ON "pages_blocks_gallery_categories" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_items_order_idx" ON "pages_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_items_parent_id_idx" ON "pages_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_items_image_idx" ON "pages_blocks_gallery_items" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_gallery_background_background_image_idx" ON "pages_blocks_gallery" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_gallery_background_background_video_idx" ON "pages_blocks_gallery" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_instagram_strip_order_idx" ON "pages_blocks_instagram_strip" USING btree ("_order");
  CREATE INDEX "pages_blocks_instagram_strip_parent_id_idx" ON "pages_blocks_instagram_strip" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_instagram_strip_path_idx" ON "pages_blocks_instagram_strip" USING btree ("_path");
  CREATE INDEX "pages_blocks_instagram_strip_background_background_image_idx" ON "pages_blocks_instagram_strip" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_instagram_strip_background_background_video_idx" ON "pages_blocks_instagram_strip" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_contact_items_order_idx" ON "pages_blocks_contact_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_items_parent_id_idx" ON "pages_blocks_contact_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_background_background_image_idx" ON "pages_blocks_contact" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_contact_background_background_video_idx" ON "pages_blocks_contact" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_navbar_order_idx" ON "pages_blocks_navbar" USING btree ("_order");
  CREATE INDEX "pages_blocks_navbar_parent_id_idx" ON "pages_blocks_navbar" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_navbar_path_idx" ON "pages_blocks_navbar" USING btree ("_path");
  CREATE INDEX "pages_blocks_navbar_logo_idx" ON "pages_blocks_navbar" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_navbar_menu_idx" ON "pages_blocks_navbar" USING btree ("menu_id");
  CREATE INDEX "pages_blocks_footer_columns_social_order_idx" ON "pages_blocks_footer_columns_social" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer_columns_social_parent_id_idx" ON "pages_blocks_footer_columns_social" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer_columns_columns_links_order_idx" ON "pages_blocks_footer_columns_columns_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer_columns_columns_links_parent_id_idx" ON "pages_blocks_footer_columns_columns_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer_columns_columns_order_idx" ON "pages_blocks_footer_columns_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer_columns_columns_parent_id_idx" ON "pages_blocks_footer_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer_columns_order_idx" ON "pages_blocks_footer_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer_columns_parent_id_idx" ON "pages_blocks_footer_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer_columns_path_idx" ON "pages_blocks_footer_columns" USING btree ("_path");
  CREATE INDEX "pages_blocks_footer_columns_logo_idx" ON "pages_blocks_footer_columns" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_about_facts_order_idx" ON "pages_blocks_about_facts" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_facts_parent_id_idx" ON "pages_blocks_about_facts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_order_idx" ON "pages_blocks_about" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_parent_id_idx" ON "pages_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_path_idx" ON "pages_blocks_about" USING btree ("_path");
  CREATE INDEX "pages_blocks_about_image_idx" ON "pages_blocks_about" USING btree ("image_id");
  CREATE INDEX "pages_blocks_about_background_background_image_idx" ON "pages_blocks_about" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_about_background_background_video_idx" ON "pages_blocks_about" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_pricing_price_blocks_rows_order_idx" ON "pages_blocks_pricing_price_blocks_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_price_blocks_rows_parent_id_idx" ON "pages_blocks_pricing_price_blocks_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_price_blocks_order_idx" ON "pages_blocks_pricing_price_blocks" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_price_blocks_parent_id_idx" ON "pages_blocks_pricing_price_blocks" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_order_idx" ON "pages_blocks_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_parent_id_idx" ON "pages_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_path_idx" ON "pages_blocks_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_button_button_internal_link_idx" ON "pages_blocks_pricing" USING btree ("button_internal_link_id");
  CREATE INDEX "pages_blocks_pricing_button_button_custom_svg_idx" ON "pages_blocks_pricing" USING btree ("button_custom_svg_id");
  CREATE INDEX "pages_blocks_pricing_background_background_image_idx" ON "pages_blocks_pricing" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_pricing_background_background_video_idx" ON "pages_blocks_pricing" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_background_background_image_idx" ON "pages_blocks_faq" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_faq_background_background_video_idx" ON "pages_blocks_faq" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_testimonials_items_order_idx" ON "pages_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_items_parent_id_idx" ON "pages_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_items_avatar_idx" ON "pages_blocks_testimonials_items" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_background_background_image_idx" ON "pages_blocks_testimonials" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_testimonials_background_background_video_idx" ON "pages_blocks_testimonials" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_stats_items_order_idx" ON "pages_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_items_parent_id_idx" ON "pages_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_order_idx" ON "pages_blocks_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_parent_id_idx" ON "pages_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_path_idx" ON "pages_blocks_stats" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_background_background_image_idx" ON "pages_blocks_stats" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_stats_background_background_video_idx" ON "pages_blocks_stats" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_team_items_social_links_order_idx" ON "pages_blocks_team_items_social_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_items_social_links_parent_id_idx" ON "pages_blocks_team_items_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_items_order_idx" ON "pages_blocks_team_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_items_parent_id_idx" ON "pages_blocks_team_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_items_photo_idx" ON "pages_blocks_team_items" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  CREATE INDEX "pages_blocks_team_background_background_image_idx" ON "pages_blocks_team" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_team_background_background_video_idx" ON "pages_blocks_team" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_form_block_background_background_image_idx" ON "pages_blocks_form_block" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_form_block_background_background_video_idx" ON "pages_blocks_form_block" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_divider_order_idx" ON "pages_blocks_divider" USING btree ("_order");
  CREATE INDEX "pages_blocks_divider_parent_id_idx" ON "pages_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_divider_path_idx" ON "pages_blocks_divider" USING btree ("_path");
  CREATE INDEX "pages_blocks_block_holder2_order_idx" ON "pages_blocks_block_holder2" USING btree ("_order");
  CREATE INDEX "pages_blocks_block_holder2_parent_id_idx" ON "pages_blocks_block_holder2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_block_holder2_path_idx" ON "pages_blocks_block_holder2" USING btree ("_path");
  CREATE INDEX "pages_blocks_block_holder1_order_idx" ON "pages_blocks_block_holder1" USING btree ("_order");
  CREATE INDEX "pages_blocks_block_holder1_parent_id_idx" ON "pages_blocks_block_holder1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_block_holder1_path_idx" ON "pages_blocks_block_holder1" USING btree ("_path");
  CREATE INDEX "pages_blocks_block_holder0_order_idx" ON "pages_blocks_block_holder0" USING btree ("_order");
  CREATE INDEX "pages_blocks_block_holder0_parent_id_idx" ON "pages_blocks_block_holder0" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_block_holder0_path_idx" ON "pages_blocks_block_holder0" USING btree ("_path");
  CREATE INDEX "pages_blocks_posts_block_order_idx" ON "pages_blocks_posts_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_posts_block_parent_id_idx" ON "pages_blocks_posts_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_posts_block_path_idx" ON "pages_blocks_posts_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_section_order_idx" ON "pages_blocks_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_parent_id_idx" ON "pages_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_path_idx" ON "pages_blocks_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_section_settings_background_settings_backgr_idx" ON "pages_blocks_section" USING btree ("settings_background_image_id");
  CREATE INDEX "pages_blocks_section_settings_background_settings_back_1_idx" ON "pages_blocks_section" USING btree ("settings_background_video_id");
  CREATE INDEX "pages_seo_image_idx" ON "pages" USING btree ("seo_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "posts_blocks_menu_order_idx" ON "posts_blocks_menu" USING btree ("_order");
  CREATE INDEX "posts_blocks_menu_parent_id_idx" ON "posts_blocks_menu" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_menu_path_idx" ON "posts_blocks_menu" USING btree ("_path");
  CREATE INDEX "posts_blocks_menu_menu_idx" ON "posts_blocks_menu" USING btree ("menu_id");
  CREATE INDEX "posts_blocks_heading_order_idx" ON "posts_blocks_heading" USING btree ("_order");
  CREATE INDEX "posts_blocks_heading_parent_id_idx" ON "posts_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_heading_path_idx" ON "posts_blocks_heading" USING btree ("_path");
  CREATE INDEX "posts_blocks_rich_text_order_idx" ON "posts_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "posts_blocks_rich_text_parent_id_idx" ON "posts_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_rich_text_path_idx" ON "posts_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "posts_blocks_image_order_idx" ON "posts_blocks_image" USING btree ("_order");
  CREATE INDEX "posts_blocks_image_parent_id_idx" ON "posts_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_image_path_idx" ON "posts_blocks_image" USING btree ("_path");
  CREATE INDEX "posts_blocks_image_image_idx" ON "posts_blocks_image" USING btree ("image_id");
  CREATE INDEX "posts_blocks_image_internal_link_idx" ON "posts_blocks_image" USING btree ("internal_link_id");
  CREATE INDEX "posts_blocks_video_order_idx" ON "posts_blocks_video" USING btree ("_order");
  CREATE INDEX "posts_blocks_video_parent_id_idx" ON "posts_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_video_path_idx" ON "posts_blocks_video" USING btree ("_path");
  CREATE INDEX "posts_blocks_video_file_idx" ON "posts_blocks_video" USING btree ("file_id");
  CREATE INDEX "posts_blocks_video_poster_idx" ON "posts_blocks_video" USING btree ("poster_id");
  CREATE INDEX "posts_blocks_button_order_idx" ON "posts_blocks_button" USING btree ("_order");
  CREATE INDEX "posts_blocks_button_parent_id_idx" ON "posts_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_button_path_idx" ON "posts_blocks_button" USING btree ("_path");
  CREATE INDEX "posts_blocks_button_internal_link_idx" ON "posts_blocks_button" USING btree ("internal_link_id");
  CREATE INDEX "posts_blocks_button_custom_svg_idx" ON "posts_blocks_button" USING btree ("custom_svg_id");
  CREATE INDEX "posts_blocks_tabs_items_order_idx" ON "posts_blocks_tabs_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_tabs_items_parent_id_idx" ON "posts_blocks_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_tabs_items_custom_svg_idx" ON "posts_blocks_tabs_items" USING btree ("custom_svg_id");
  CREATE INDEX "posts_blocks_tabs_order_idx" ON "posts_blocks_tabs" USING btree ("_order");
  CREATE INDEX "posts_blocks_tabs_parent_id_idx" ON "posts_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_tabs_path_idx" ON "posts_blocks_tabs" USING btree ("_path");
  CREATE INDEX "posts_blocks_slider_slides_order_idx" ON "posts_blocks_slider_slides" USING btree ("_order");
  CREATE INDEX "posts_blocks_slider_slides_parent_id_idx" ON "posts_blocks_slider_slides" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_slider_slides_image_idx" ON "posts_blocks_slider_slides" USING btree ("image_id");
  CREATE INDEX "posts_blocks_slider_order_idx" ON "posts_blocks_slider" USING btree ("_order");
  CREATE INDEX "posts_blocks_slider_parent_id_idx" ON "posts_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_slider_path_idx" ON "posts_blocks_slider" USING btree ("_path");
  CREATE INDEX "posts_blocks_slider_background_background_image_idx" ON "posts_blocks_slider" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_slider_background_background_video_idx" ON "posts_blocks_slider" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_accordion_items_order_idx" ON "posts_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_accordion_items_parent_id_idx" ON "posts_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_accordion_items_custom_svg_idx" ON "posts_blocks_accordion_items" USING btree ("custom_svg_id");
  CREATE INDEX "posts_blocks_accordion_order_idx" ON "posts_blocks_accordion" USING btree ("_order");
  CREATE INDEX "posts_blocks_accordion_parent_id_idx" ON "posts_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_accordion_path_idx" ON "posts_blocks_accordion" USING btree ("_path");
  CREATE INDEX "posts_blocks_accordion_background_background_image_idx" ON "posts_blocks_accordion" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_accordion_background_background_video_idx" ON "posts_blocks_accordion" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_cta_order_idx" ON "posts_blocks_cta" USING btree ("_order");
  CREATE INDEX "posts_blocks_cta_parent_id_idx" ON "posts_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cta_path_idx" ON "posts_blocks_cta" USING btree ("_path");
  CREATE INDEX "posts_blocks_cta_background_background_image_idx" ON "posts_blocks_cta" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_cta_background_background_video_idx" ON "posts_blocks_cta" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_hero_trust_items_order_idx" ON "posts_blocks_hero_trust_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_hero_trust_items_parent_id_idx" ON "posts_blocks_hero_trust_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hero_images_order_idx" ON "posts_blocks_hero_images" USING btree ("_order");
  CREATE INDEX "posts_blocks_hero_images_parent_id_idx" ON "posts_blocks_hero_images" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hero_images_image_idx" ON "posts_blocks_hero_images" USING btree ("image_id");
  CREATE INDEX "posts_blocks_hero_order_idx" ON "posts_blocks_hero" USING btree ("_order");
  CREATE INDEX "posts_blocks_hero_parent_id_idx" ON "posts_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hero_path_idx" ON "posts_blocks_hero" USING btree ("_path");
  CREATE INDEX "posts_blocks_hero_background_background_image_idx" ON "posts_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_hero_background_background_video_idx" ON "posts_blocks_hero" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_services_items_order_idx" ON "posts_blocks_services_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_services_items_parent_id_idx" ON "posts_blocks_services_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_services_items_custom_svg_idx" ON "posts_blocks_services_items" USING btree ("custom_svg_id");
  CREATE INDEX "posts_blocks_services_order_idx" ON "posts_blocks_services" USING btree ("_order");
  CREATE INDEX "posts_blocks_services_parent_id_idx" ON "posts_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_services_path_idx" ON "posts_blocks_services" USING btree ("_path");
  CREATE INDEX "posts_blocks_services_background_background_image_idx" ON "posts_blocks_services" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_services_background_background_video_idx" ON "posts_blocks_services" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_process_steps_order_idx" ON "posts_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "posts_blocks_process_steps_parent_id_idx" ON "posts_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_process_order_idx" ON "posts_blocks_process" USING btree ("_order");
  CREATE INDEX "posts_blocks_process_parent_id_idx" ON "posts_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_process_path_idx" ON "posts_blocks_process" USING btree ("_path");
  CREATE INDEX "posts_blocks_process_background_background_image_idx" ON "posts_blocks_process" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_process_background_background_video_idx" ON "posts_blocks_process" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_gallery_categories_order_idx" ON "posts_blocks_gallery_categories" USING btree ("_order");
  CREATE INDEX "posts_blocks_gallery_categories_parent_id_idx" ON "posts_blocks_gallery_categories" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_gallery_items_order_idx" ON "posts_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_gallery_items_parent_id_idx" ON "posts_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_gallery_items_image_idx" ON "posts_blocks_gallery_items" USING btree ("image_id");
  CREATE INDEX "posts_blocks_gallery_order_idx" ON "posts_blocks_gallery" USING btree ("_order");
  CREATE INDEX "posts_blocks_gallery_parent_id_idx" ON "posts_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_gallery_path_idx" ON "posts_blocks_gallery" USING btree ("_path");
  CREATE INDEX "posts_blocks_gallery_background_background_image_idx" ON "posts_blocks_gallery" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_gallery_background_background_video_idx" ON "posts_blocks_gallery" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_instagram_strip_order_idx" ON "posts_blocks_instagram_strip" USING btree ("_order");
  CREATE INDEX "posts_blocks_instagram_strip_parent_id_idx" ON "posts_blocks_instagram_strip" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_instagram_strip_path_idx" ON "posts_blocks_instagram_strip" USING btree ("_path");
  CREATE INDEX "posts_blocks_instagram_strip_background_background_image_idx" ON "posts_blocks_instagram_strip" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_instagram_strip_background_background_video_idx" ON "posts_blocks_instagram_strip" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_contact_items_order_idx" ON "posts_blocks_contact_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_contact_items_parent_id_idx" ON "posts_blocks_contact_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_contact_order_idx" ON "posts_blocks_contact" USING btree ("_order");
  CREATE INDEX "posts_blocks_contact_parent_id_idx" ON "posts_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_contact_path_idx" ON "posts_blocks_contact" USING btree ("_path");
  CREATE INDEX "posts_blocks_contact_background_background_image_idx" ON "posts_blocks_contact" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_contact_background_background_video_idx" ON "posts_blocks_contact" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_navbar_order_idx" ON "posts_blocks_navbar" USING btree ("_order");
  CREATE INDEX "posts_blocks_navbar_parent_id_idx" ON "posts_blocks_navbar" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_navbar_path_idx" ON "posts_blocks_navbar" USING btree ("_path");
  CREATE INDEX "posts_blocks_navbar_logo_idx" ON "posts_blocks_navbar" USING btree ("logo_id");
  CREATE INDEX "posts_blocks_navbar_menu_idx" ON "posts_blocks_navbar" USING btree ("menu_id");
  CREATE INDEX "posts_blocks_footer_columns_social_order_idx" ON "posts_blocks_footer_columns_social" USING btree ("_order");
  CREATE INDEX "posts_blocks_footer_columns_social_parent_id_idx" ON "posts_blocks_footer_columns_social" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_footer_columns_columns_links_order_idx" ON "posts_blocks_footer_columns_columns_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_footer_columns_columns_links_parent_id_idx" ON "posts_blocks_footer_columns_columns_links" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_footer_columns_columns_order_idx" ON "posts_blocks_footer_columns_columns" USING btree ("_order");
  CREATE INDEX "posts_blocks_footer_columns_columns_parent_id_idx" ON "posts_blocks_footer_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_footer_columns_order_idx" ON "posts_blocks_footer_columns" USING btree ("_order");
  CREATE INDEX "posts_blocks_footer_columns_parent_id_idx" ON "posts_blocks_footer_columns" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_footer_columns_path_idx" ON "posts_blocks_footer_columns" USING btree ("_path");
  CREATE INDEX "posts_blocks_footer_columns_logo_idx" ON "posts_blocks_footer_columns" USING btree ("logo_id");
  CREATE INDEX "posts_blocks_about_facts_order_idx" ON "posts_blocks_about_facts" USING btree ("_order");
  CREATE INDEX "posts_blocks_about_facts_parent_id_idx" ON "posts_blocks_about_facts" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_about_order_idx" ON "posts_blocks_about" USING btree ("_order");
  CREATE INDEX "posts_blocks_about_parent_id_idx" ON "posts_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_about_path_idx" ON "posts_blocks_about" USING btree ("_path");
  CREATE INDEX "posts_blocks_about_image_idx" ON "posts_blocks_about" USING btree ("image_id");
  CREATE INDEX "posts_blocks_about_background_background_image_idx" ON "posts_blocks_about" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_about_background_background_video_idx" ON "posts_blocks_about" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_pricing_price_blocks_rows_order_idx" ON "posts_blocks_pricing_price_blocks_rows" USING btree ("_order");
  CREATE INDEX "posts_blocks_pricing_price_blocks_rows_parent_id_idx" ON "posts_blocks_pricing_price_blocks_rows" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_pricing_price_blocks_order_idx" ON "posts_blocks_pricing_price_blocks" USING btree ("_order");
  CREATE INDEX "posts_blocks_pricing_price_blocks_parent_id_idx" ON "posts_blocks_pricing_price_blocks" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_pricing_order_idx" ON "posts_blocks_pricing" USING btree ("_order");
  CREATE INDEX "posts_blocks_pricing_parent_id_idx" ON "posts_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_pricing_path_idx" ON "posts_blocks_pricing" USING btree ("_path");
  CREATE INDEX "posts_blocks_pricing_button_button_internal_link_idx" ON "posts_blocks_pricing" USING btree ("button_internal_link_id");
  CREATE INDEX "posts_blocks_pricing_button_button_custom_svg_idx" ON "posts_blocks_pricing" USING btree ("button_custom_svg_id");
  CREATE INDEX "posts_blocks_pricing_background_background_image_idx" ON "posts_blocks_pricing" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_pricing_background_background_video_idx" ON "posts_blocks_pricing" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_faq_items_order_idx" ON "posts_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_faq_items_parent_id_idx" ON "posts_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_faq_order_idx" ON "posts_blocks_faq" USING btree ("_order");
  CREATE INDEX "posts_blocks_faq_parent_id_idx" ON "posts_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_faq_path_idx" ON "posts_blocks_faq" USING btree ("_path");
  CREATE INDEX "posts_blocks_faq_background_background_image_idx" ON "posts_blocks_faq" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_faq_background_background_video_idx" ON "posts_blocks_faq" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_testimonials_items_order_idx" ON "posts_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_testimonials_items_parent_id_idx" ON "posts_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_testimonials_items_avatar_idx" ON "posts_blocks_testimonials_items" USING btree ("avatar_id");
  CREATE INDEX "posts_blocks_testimonials_order_idx" ON "posts_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "posts_blocks_testimonials_parent_id_idx" ON "posts_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_testimonials_path_idx" ON "posts_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "posts_blocks_testimonials_background_background_image_idx" ON "posts_blocks_testimonials" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_testimonials_background_background_video_idx" ON "posts_blocks_testimonials" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_stats_items_order_idx" ON "posts_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_items_parent_id_idx" ON "posts_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_stats_order_idx" ON "posts_blocks_stats" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_parent_id_idx" ON "posts_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_stats_path_idx" ON "posts_blocks_stats" USING btree ("_path");
  CREATE INDEX "posts_blocks_stats_background_background_image_idx" ON "posts_blocks_stats" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_stats_background_background_video_idx" ON "posts_blocks_stats" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_team_items_social_links_order_idx" ON "posts_blocks_team_items_social_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_team_items_social_links_parent_id_idx" ON "posts_blocks_team_items_social_links" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_team_items_order_idx" ON "posts_blocks_team_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_team_items_parent_id_idx" ON "posts_blocks_team_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_team_items_photo_idx" ON "posts_blocks_team_items" USING btree ("photo_id");
  CREATE INDEX "posts_blocks_team_order_idx" ON "posts_blocks_team" USING btree ("_order");
  CREATE INDEX "posts_blocks_team_parent_id_idx" ON "posts_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_team_path_idx" ON "posts_blocks_team" USING btree ("_path");
  CREATE INDEX "posts_blocks_team_background_background_image_idx" ON "posts_blocks_team" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_team_background_background_video_idx" ON "posts_blocks_team" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_form_block_order_idx" ON "posts_blocks_form_block" USING btree ("_order");
  CREATE INDEX "posts_blocks_form_block_parent_id_idx" ON "posts_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_form_block_path_idx" ON "posts_blocks_form_block" USING btree ("_path");
  CREATE INDEX "posts_blocks_form_block_form_idx" ON "posts_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "posts_blocks_form_block_background_background_image_idx" ON "posts_blocks_form_block" USING btree ("background_image_id");
  CREATE INDEX "posts_blocks_form_block_background_background_video_idx" ON "posts_blocks_form_block" USING btree ("background_video_id");
  CREATE INDEX "posts_blocks_divider_order_idx" ON "posts_blocks_divider" USING btree ("_order");
  CREATE INDEX "posts_blocks_divider_parent_id_idx" ON "posts_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_divider_path_idx" ON "posts_blocks_divider" USING btree ("_path");
  CREATE INDEX "posts_blocks_block_holder2_order_idx" ON "posts_blocks_block_holder2" USING btree ("_order");
  CREATE INDEX "posts_blocks_block_holder2_parent_id_idx" ON "posts_blocks_block_holder2" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_block_holder2_path_idx" ON "posts_blocks_block_holder2" USING btree ("_path");
  CREATE INDEX "posts_blocks_block_holder1_order_idx" ON "posts_blocks_block_holder1" USING btree ("_order");
  CREATE INDEX "posts_blocks_block_holder1_parent_id_idx" ON "posts_blocks_block_holder1" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_block_holder1_path_idx" ON "posts_blocks_block_holder1" USING btree ("_path");
  CREATE INDEX "posts_blocks_block_holder0_order_idx" ON "posts_blocks_block_holder0" USING btree ("_order");
  CREATE INDEX "posts_blocks_block_holder0_parent_id_idx" ON "posts_blocks_block_holder0" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_block_holder0_path_idx" ON "posts_blocks_block_holder0" USING btree ("_path");
  CREATE INDEX "posts_blocks_posts_block_order_idx" ON "posts_blocks_posts_block" USING btree ("_order");
  CREATE INDEX "posts_blocks_posts_block_parent_id_idx" ON "posts_blocks_posts_block" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_posts_block_path_idx" ON "posts_blocks_posts_block" USING btree ("_path");
  CREATE INDEX "posts_blocks_section_order_idx" ON "posts_blocks_section" USING btree ("_order");
  CREATE INDEX "posts_blocks_section_parent_id_idx" ON "posts_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_section_path_idx" ON "posts_blocks_section" USING btree ("_path");
  CREATE INDEX "posts_blocks_section_settings_background_settings_backgr_idx" ON "posts_blocks_section" USING btree ("settings_background_image_id");
  CREATE INDEX "posts_blocks_section_settings_background_settings_back_1_idx" ON "posts_blocks_section" USING btree ("settings_background_video_id");
  CREATE INDEX "posts_featured_image_idx" ON "posts" USING btree ("featured_image_id");
  CREATE INDEX "posts_seo_image_idx" ON "posts" USING btree ("seo_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "menus_items_children_order_idx" ON "menus_items_children" USING btree ("_order");
  CREATE INDEX "menus_items_children_parent_id_idx" ON "menus_items_children" USING btree ("_parent_id");
  CREATE INDEX "menus_items_children_page_idx" ON "menus_items_children" USING btree ("page_id");
  CREATE INDEX "menus_items_order_idx" ON "menus_items" USING btree ("_order");
  CREATE INDEX "menus_items_parent_id_idx" ON "menus_items" USING btree ("_parent_id");
  CREATE INDEX "menus_items_page_idx" ON "menus_items" USING btree ("page_id");
  CREATE INDEX "menus_updated_at_idx" ON "menus" USING btree ("updated_at");
  CREATE INDEX "menus_created_at_idx" ON "menus" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "forms_rels_order_idx" ON "forms_rels" USING btree ("order");
  CREATE INDEX "forms_rels_parent_idx" ON "forms_rels" USING btree ("parent_id");
  CREATE INDEX "forms_rels_path_idx" ON "forms_rels" USING btree ("path");
  CREATE INDEX "forms_rels_pages_id_idx" ON "forms_rels" USING btree ("pages_id");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_menus_id_idx" ON "payload_locked_documents_rels" USING btree ("menus_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "colors_colors_order_idx" ON "colors_colors" USING btree ("_order");
  CREATE INDEX "colors_colors_parent_id_idx" ON "colors_colors" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_menu_order_idx" ON "header_blocks_menu" USING btree ("_order");
  CREATE INDEX "header_blocks_menu_parent_id_idx" ON "header_blocks_menu" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_menu_path_idx" ON "header_blocks_menu" USING btree ("_path");
  CREATE INDEX "header_blocks_menu_menu_idx" ON "header_blocks_menu" USING btree ("menu_id");
  CREATE INDEX "header_blocks_heading_order_idx" ON "header_blocks_heading" USING btree ("_order");
  CREATE INDEX "header_blocks_heading_parent_id_idx" ON "header_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_heading_path_idx" ON "header_blocks_heading" USING btree ("_path");
  CREATE INDEX "header_blocks_rich_text_order_idx" ON "header_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "header_blocks_rich_text_parent_id_idx" ON "header_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_rich_text_path_idx" ON "header_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "header_blocks_image_order_idx" ON "header_blocks_image" USING btree ("_order");
  CREATE INDEX "header_blocks_image_parent_id_idx" ON "header_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_image_path_idx" ON "header_blocks_image" USING btree ("_path");
  CREATE INDEX "header_blocks_image_image_idx" ON "header_blocks_image" USING btree ("image_id");
  CREATE INDEX "header_blocks_image_internal_link_idx" ON "header_blocks_image" USING btree ("internal_link_id");
  CREATE INDEX "header_blocks_video_order_idx" ON "header_blocks_video" USING btree ("_order");
  CREATE INDEX "header_blocks_video_parent_id_idx" ON "header_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_video_path_idx" ON "header_blocks_video" USING btree ("_path");
  CREATE INDEX "header_blocks_video_file_idx" ON "header_blocks_video" USING btree ("file_id");
  CREATE INDEX "header_blocks_video_poster_idx" ON "header_blocks_video" USING btree ("poster_id");
  CREATE INDEX "header_blocks_button_order_idx" ON "header_blocks_button" USING btree ("_order");
  CREATE INDEX "header_blocks_button_parent_id_idx" ON "header_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_button_path_idx" ON "header_blocks_button" USING btree ("_path");
  CREATE INDEX "header_blocks_button_internal_link_idx" ON "header_blocks_button" USING btree ("internal_link_id");
  CREATE INDEX "header_blocks_button_custom_svg_idx" ON "header_blocks_button" USING btree ("custom_svg_id");
  CREATE INDEX "header_blocks_tabs_items_order_idx" ON "header_blocks_tabs_items" USING btree ("_order");
  CREATE INDEX "header_blocks_tabs_items_parent_id_idx" ON "header_blocks_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_tabs_items_custom_svg_idx" ON "header_blocks_tabs_items" USING btree ("custom_svg_id");
  CREATE INDEX "header_blocks_tabs_order_idx" ON "header_blocks_tabs" USING btree ("_order");
  CREATE INDEX "header_blocks_tabs_parent_id_idx" ON "header_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_tabs_path_idx" ON "header_blocks_tabs" USING btree ("_path");
  CREATE INDEX "header_blocks_slider_slides_order_idx" ON "header_blocks_slider_slides" USING btree ("_order");
  CREATE INDEX "header_blocks_slider_slides_parent_id_idx" ON "header_blocks_slider_slides" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_slider_slides_image_idx" ON "header_blocks_slider_slides" USING btree ("image_id");
  CREATE INDEX "header_blocks_slider_order_idx" ON "header_blocks_slider" USING btree ("_order");
  CREATE INDEX "header_blocks_slider_parent_id_idx" ON "header_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_slider_path_idx" ON "header_blocks_slider" USING btree ("_path");
  CREATE INDEX "header_blocks_slider_background_background_image_idx" ON "header_blocks_slider" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_slider_background_background_video_idx" ON "header_blocks_slider" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_accordion_items_order_idx" ON "header_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "header_blocks_accordion_items_parent_id_idx" ON "header_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_accordion_items_custom_svg_idx" ON "header_blocks_accordion_items" USING btree ("custom_svg_id");
  CREATE INDEX "header_blocks_accordion_order_idx" ON "header_blocks_accordion" USING btree ("_order");
  CREATE INDEX "header_blocks_accordion_parent_id_idx" ON "header_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_accordion_path_idx" ON "header_blocks_accordion" USING btree ("_path");
  CREATE INDEX "header_blocks_accordion_background_background_image_idx" ON "header_blocks_accordion" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_accordion_background_background_video_idx" ON "header_blocks_accordion" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_cta_order_idx" ON "header_blocks_cta" USING btree ("_order");
  CREATE INDEX "header_blocks_cta_parent_id_idx" ON "header_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_cta_path_idx" ON "header_blocks_cta" USING btree ("_path");
  CREATE INDEX "header_blocks_cta_background_background_image_idx" ON "header_blocks_cta" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_cta_background_background_video_idx" ON "header_blocks_cta" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_hero_trust_items_order_idx" ON "header_blocks_hero_trust_items" USING btree ("_order");
  CREATE INDEX "header_blocks_hero_trust_items_parent_id_idx" ON "header_blocks_hero_trust_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_hero_images_order_idx" ON "header_blocks_hero_images" USING btree ("_order");
  CREATE INDEX "header_blocks_hero_images_parent_id_idx" ON "header_blocks_hero_images" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_hero_images_image_idx" ON "header_blocks_hero_images" USING btree ("image_id");
  CREATE INDEX "header_blocks_hero_order_idx" ON "header_blocks_hero" USING btree ("_order");
  CREATE INDEX "header_blocks_hero_parent_id_idx" ON "header_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_hero_path_idx" ON "header_blocks_hero" USING btree ("_path");
  CREATE INDEX "header_blocks_hero_background_background_image_idx" ON "header_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_hero_background_background_video_idx" ON "header_blocks_hero" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_services_items_order_idx" ON "header_blocks_services_items" USING btree ("_order");
  CREATE INDEX "header_blocks_services_items_parent_id_idx" ON "header_blocks_services_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_services_items_custom_svg_idx" ON "header_blocks_services_items" USING btree ("custom_svg_id");
  CREATE INDEX "header_blocks_services_order_idx" ON "header_blocks_services" USING btree ("_order");
  CREATE INDEX "header_blocks_services_parent_id_idx" ON "header_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_services_path_idx" ON "header_blocks_services" USING btree ("_path");
  CREATE INDEX "header_blocks_services_background_background_image_idx" ON "header_blocks_services" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_services_background_background_video_idx" ON "header_blocks_services" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_process_steps_order_idx" ON "header_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "header_blocks_process_steps_parent_id_idx" ON "header_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_process_order_idx" ON "header_blocks_process" USING btree ("_order");
  CREATE INDEX "header_blocks_process_parent_id_idx" ON "header_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_process_path_idx" ON "header_blocks_process" USING btree ("_path");
  CREATE INDEX "header_blocks_process_background_background_image_idx" ON "header_blocks_process" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_process_background_background_video_idx" ON "header_blocks_process" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_gallery_categories_order_idx" ON "header_blocks_gallery_categories" USING btree ("_order");
  CREATE INDEX "header_blocks_gallery_categories_parent_id_idx" ON "header_blocks_gallery_categories" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_gallery_items_order_idx" ON "header_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "header_blocks_gallery_items_parent_id_idx" ON "header_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_gallery_items_image_idx" ON "header_blocks_gallery_items" USING btree ("image_id");
  CREATE INDEX "header_blocks_gallery_order_idx" ON "header_blocks_gallery" USING btree ("_order");
  CREATE INDEX "header_blocks_gallery_parent_id_idx" ON "header_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_gallery_path_idx" ON "header_blocks_gallery" USING btree ("_path");
  CREATE INDEX "header_blocks_gallery_background_background_image_idx" ON "header_blocks_gallery" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_gallery_background_background_video_idx" ON "header_blocks_gallery" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_instagram_strip_order_idx" ON "header_blocks_instagram_strip" USING btree ("_order");
  CREATE INDEX "header_blocks_instagram_strip_parent_id_idx" ON "header_blocks_instagram_strip" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_instagram_strip_path_idx" ON "header_blocks_instagram_strip" USING btree ("_path");
  CREATE INDEX "header_blocks_instagram_strip_background_background_imag_idx" ON "header_blocks_instagram_strip" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_instagram_strip_background_background_vide_idx" ON "header_blocks_instagram_strip" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_contact_items_order_idx" ON "header_blocks_contact_items" USING btree ("_order");
  CREATE INDEX "header_blocks_contact_items_parent_id_idx" ON "header_blocks_contact_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_contact_order_idx" ON "header_blocks_contact" USING btree ("_order");
  CREATE INDEX "header_blocks_contact_parent_id_idx" ON "header_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_contact_path_idx" ON "header_blocks_contact" USING btree ("_path");
  CREATE INDEX "header_blocks_contact_background_background_image_idx" ON "header_blocks_contact" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_contact_background_background_video_idx" ON "header_blocks_contact" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_navbar_order_idx" ON "header_blocks_navbar" USING btree ("_order");
  CREATE INDEX "header_blocks_navbar_parent_id_idx" ON "header_blocks_navbar" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_navbar_path_idx" ON "header_blocks_navbar" USING btree ("_path");
  CREATE INDEX "header_blocks_navbar_logo_idx" ON "header_blocks_navbar" USING btree ("logo_id");
  CREATE INDEX "header_blocks_navbar_menu_idx" ON "header_blocks_navbar" USING btree ("menu_id");
  CREATE INDEX "header_blocks_footer_columns_social_order_idx" ON "header_blocks_footer_columns_social" USING btree ("_order");
  CREATE INDEX "header_blocks_footer_columns_social_parent_id_idx" ON "header_blocks_footer_columns_social" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_footer_columns_columns_links_order_idx" ON "header_blocks_footer_columns_columns_links" USING btree ("_order");
  CREATE INDEX "header_blocks_footer_columns_columns_links_parent_id_idx" ON "header_blocks_footer_columns_columns_links" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_footer_columns_columns_order_idx" ON "header_blocks_footer_columns_columns" USING btree ("_order");
  CREATE INDEX "header_blocks_footer_columns_columns_parent_id_idx" ON "header_blocks_footer_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_footer_columns_order_idx" ON "header_blocks_footer_columns" USING btree ("_order");
  CREATE INDEX "header_blocks_footer_columns_parent_id_idx" ON "header_blocks_footer_columns" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_footer_columns_path_idx" ON "header_blocks_footer_columns" USING btree ("_path");
  CREATE INDEX "header_blocks_footer_columns_logo_idx" ON "header_blocks_footer_columns" USING btree ("logo_id");
  CREATE INDEX "header_blocks_about_facts_order_idx" ON "header_blocks_about_facts" USING btree ("_order");
  CREATE INDEX "header_blocks_about_facts_parent_id_idx" ON "header_blocks_about_facts" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_about_order_idx" ON "header_blocks_about" USING btree ("_order");
  CREATE INDEX "header_blocks_about_parent_id_idx" ON "header_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_about_path_idx" ON "header_blocks_about" USING btree ("_path");
  CREATE INDEX "header_blocks_about_image_idx" ON "header_blocks_about" USING btree ("image_id");
  CREATE INDEX "header_blocks_about_background_background_image_idx" ON "header_blocks_about" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_about_background_background_video_idx" ON "header_blocks_about" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_pricing_price_blocks_rows_order_idx" ON "header_blocks_pricing_price_blocks_rows" USING btree ("_order");
  CREATE INDEX "header_blocks_pricing_price_blocks_rows_parent_id_idx" ON "header_blocks_pricing_price_blocks_rows" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_pricing_price_blocks_order_idx" ON "header_blocks_pricing_price_blocks" USING btree ("_order");
  CREATE INDEX "header_blocks_pricing_price_blocks_parent_id_idx" ON "header_blocks_pricing_price_blocks" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_pricing_order_idx" ON "header_blocks_pricing" USING btree ("_order");
  CREATE INDEX "header_blocks_pricing_parent_id_idx" ON "header_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_pricing_path_idx" ON "header_blocks_pricing" USING btree ("_path");
  CREATE INDEX "header_blocks_pricing_button_button_internal_link_idx" ON "header_blocks_pricing" USING btree ("button_internal_link_id");
  CREATE INDEX "header_blocks_pricing_button_button_custom_svg_idx" ON "header_blocks_pricing" USING btree ("button_custom_svg_id");
  CREATE INDEX "header_blocks_pricing_background_background_image_idx" ON "header_blocks_pricing" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_pricing_background_background_video_idx" ON "header_blocks_pricing" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_faq_items_order_idx" ON "header_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "header_blocks_faq_items_parent_id_idx" ON "header_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_faq_order_idx" ON "header_blocks_faq" USING btree ("_order");
  CREATE INDEX "header_blocks_faq_parent_id_idx" ON "header_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_faq_path_idx" ON "header_blocks_faq" USING btree ("_path");
  CREATE INDEX "header_blocks_faq_background_background_image_idx" ON "header_blocks_faq" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_faq_background_background_video_idx" ON "header_blocks_faq" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_testimonials_items_order_idx" ON "header_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "header_blocks_testimonials_items_parent_id_idx" ON "header_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_testimonials_items_avatar_idx" ON "header_blocks_testimonials_items" USING btree ("avatar_id");
  CREATE INDEX "header_blocks_testimonials_order_idx" ON "header_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "header_blocks_testimonials_parent_id_idx" ON "header_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_testimonials_path_idx" ON "header_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "header_blocks_testimonials_background_background_image_idx" ON "header_blocks_testimonials" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_testimonials_background_background_video_idx" ON "header_blocks_testimonials" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_stats_items_order_idx" ON "header_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "header_blocks_stats_items_parent_id_idx" ON "header_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_stats_order_idx" ON "header_blocks_stats" USING btree ("_order");
  CREATE INDEX "header_blocks_stats_parent_id_idx" ON "header_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_stats_path_idx" ON "header_blocks_stats" USING btree ("_path");
  CREATE INDEX "header_blocks_stats_background_background_image_idx" ON "header_blocks_stats" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_stats_background_background_video_idx" ON "header_blocks_stats" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_team_items_social_links_order_idx" ON "header_blocks_team_items_social_links" USING btree ("_order");
  CREATE INDEX "header_blocks_team_items_social_links_parent_id_idx" ON "header_blocks_team_items_social_links" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_team_items_order_idx" ON "header_blocks_team_items" USING btree ("_order");
  CREATE INDEX "header_blocks_team_items_parent_id_idx" ON "header_blocks_team_items" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_team_items_photo_idx" ON "header_blocks_team_items" USING btree ("photo_id");
  CREATE INDEX "header_blocks_team_order_idx" ON "header_blocks_team" USING btree ("_order");
  CREATE INDEX "header_blocks_team_parent_id_idx" ON "header_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_team_path_idx" ON "header_blocks_team" USING btree ("_path");
  CREATE INDEX "header_blocks_team_background_background_image_idx" ON "header_blocks_team" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_team_background_background_video_idx" ON "header_blocks_team" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_form_block_order_idx" ON "header_blocks_form_block" USING btree ("_order");
  CREATE INDEX "header_blocks_form_block_parent_id_idx" ON "header_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_form_block_path_idx" ON "header_blocks_form_block" USING btree ("_path");
  CREATE INDEX "header_blocks_form_block_form_idx" ON "header_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "header_blocks_form_block_background_background_image_idx" ON "header_blocks_form_block" USING btree ("background_image_id");
  CREATE INDEX "header_blocks_form_block_background_background_video_idx" ON "header_blocks_form_block" USING btree ("background_video_id");
  CREATE INDEX "header_blocks_divider_order_idx" ON "header_blocks_divider" USING btree ("_order");
  CREATE INDEX "header_blocks_divider_parent_id_idx" ON "header_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_divider_path_idx" ON "header_blocks_divider" USING btree ("_path");
  CREATE INDEX "header_blocks_block_holder2_order_idx" ON "header_blocks_block_holder2" USING btree ("_order");
  CREATE INDEX "header_blocks_block_holder2_parent_id_idx" ON "header_blocks_block_holder2" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_block_holder2_path_idx" ON "header_blocks_block_holder2" USING btree ("_path");
  CREATE INDEX "header_blocks_block_holder1_order_idx" ON "header_blocks_block_holder1" USING btree ("_order");
  CREATE INDEX "header_blocks_block_holder1_parent_id_idx" ON "header_blocks_block_holder1" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_block_holder1_path_idx" ON "header_blocks_block_holder1" USING btree ("_path");
  CREATE INDEX "header_blocks_block_holder0_order_idx" ON "header_blocks_block_holder0" USING btree ("_order");
  CREATE INDEX "header_blocks_block_holder0_parent_id_idx" ON "header_blocks_block_holder0" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_block_holder0_path_idx" ON "header_blocks_block_holder0" USING btree ("_path");
  CREATE INDEX "header_blocks_posts_block_order_idx" ON "header_blocks_posts_block" USING btree ("_order");
  CREATE INDEX "header_blocks_posts_block_parent_id_idx" ON "header_blocks_posts_block" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_posts_block_path_idx" ON "header_blocks_posts_block" USING btree ("_path");
  CREATE INDEX "header_blocks_section_order_idx" ON "header_blocks_section" USING btree ("_order");
  CREATE INDEX "header_blocks_section_parent_id_idx" ON "header_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_section_path_idx" ON "header_blocks_section" USING btree ("_path");
  CREATE INDEX "header_blocks_section_settings_background_settings_backg_idx" ON "header_blocks_section" USING btree ("settings_background_image_id");
  CREATE INDEX "header_blocks_section_settings_background_settings_bac_1_idx" ON "header_blocks_section" USING btree ("settings_background_video_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_categories_id_idx" ON "header_rels" USING btree ("categories_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_blocks_menu_order_idx" ON "footer_blocks_menu" USING btree ("_order");
  CREATE INDEX "footer_blocks_menu_parent_id_idx" ON "footer_blocks_menu" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_menu_path_idx" ON "footer_blocks_menu" USING btree ("_path");
  CREATE INDEX "footer_blocks_menu_menu_idx" ON "footer_blocks_menu" USING btree ("menu_id");
  CREATE INDEX "footer_blocks_heading_order_idx" ON "footer_blocks_heading" USING btree ("_order");
  CREATE INDEX "footer_blocks_heading_parent_id_idx" ON "footer_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_heading_path_idx" ON "footer_blocks_heading" USING btree ("_path");
  CREATE INDEX "footer_blocks_rich_text_order_idx" ON "footer_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "footer_blocks_rich_text_parent_id_idx" ON "footer_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_rich_text_path_idx" ON "footer_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "footer_blocks_image_order_idx" ON "footer_blocks_image" USING btree ("_order");
  CREATE INDEX "footer_blocks_image_parent_id_idx" ON "footer_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_image_path_idx" ON "footer_blocks_image" USING btree ("_path");
  CREATE INDEX "footer_blocks_image_image_idx" ON "footer_blocks_image" USING btree ("image_id");
  CREATE INDEX "footer_blocks_image_internal_link_idx" ON "footer_blocks_image" USING btree ("internal_link_id");
  CREATE INDEX "footer_blocks_video_order_idx" ON "footer_blocks_video" USING btree ("_order");
  CREATE INDEX "footer_blocks_video_parent_id_idx" ON "footer_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_video_path_idx" ON "footer_blocks_video" USING btree ("_path");
  CREATE INDEX "footer_blocks_video_file_idx" ON "footer_blocks_video" USING btree ("file_id");
  CREATE INDEX "footer_blocks_video_poster_idx" ON "footer_blocks_video" USING btree ("poster_id");
  CREATE INDEX "footer_blocks_button_order_idx" ON "footer_blocks_button" USING btree ("_order");
  CREATE INDEX "footer_blocks_button_parent_id_idx" ON "footer_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_button_path_idx" ON "footer_blocks_button" USING btree ("_path");
  CREATE INDEX "footer_blocks_button_internal_link_idx" ON "footer_blocks_button" USING btree ("internal_link_id");
  CREATE INDEX "footer_blocks_button_custom_svg_idx" ON "footer_blocks_button" USING btree ("custom_svg_id");
  CREATE INDEX "footer_blocks_tabs_items_order_idx" ON "footer_blocks_tabs_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_tabs_items_parent_id_idx" ON "footer_blocks_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_tabs_items_custom_svg_idx" ON "footer_blocks_tabs_items" USING btree ("custom_svg_id");
  CREATE INDEX "footer_blocks_tabs_order_idx" ON "footer_blocks_tabs" USING btree ("_order");
  CREATE INDEX "footer_blocks_tabs_parent_id_idx" ON "footer_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_tabs_path_idx" ON "footer_blocks_tabs" USING btree ("_path");
  CREATE INDEX "footer_blocks_slider_slides_order_idx" ON "footer_blocks_slider_slides" USING btree ("_order");
  CREATE INDEX "footer_blocks_slider_slides_parent_id_idx" ON "footer_blocks_slider_slides" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_slider_slides_image_idx" ON "footer_blocks_slider_slides" USING btree ("image_id");
  CREATE INDEX "footer_blocks_slider_order_idx" ON "footer_blocks_slider" USING btree ("_order");
  CREATE INDEX "footer_blocks_slider_parent_id_idx" ON "footer_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_slider_path_idx" ON "footer_blocks_slider" USING btree ("_path");
  CREATE INDEX "footer_blocks_slider_background_background_image_idx" ON "footer_blocks_slider" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_slider_background_background_video_idx" ON "footer_blocks_slider" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_accordion_items_order_idx" ON "footer_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_accordion_items_parent_id_idx" ON "footer_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_accordion_items_custom_svg_idx" ON "footer_blocks_accordion_items" USING btree ("custom_svg_id");
  CREATE INDEX "footer_blocks_accordion_order_idx" ON "footer_blocks_accordion" USING btree ("_order");
  CREATE INDEX "footer_blocks_accordion_parent_id_idx" ON "footer_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_accordion_path_idx" ON "footer_blocks_accordion" USING btree ("_path");
  CREATE INDEX "footer_blocks_accordion_background_background_image_idx" ON "footer_blocks_accordion" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_accordion_background_background_video_idx" ON "footer_blocks_accordion" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_cta_order_idx" ON "footer_blocks_cta" USING btree ("_order");
  CREATE INDEX "footer_blocks_cta_parent_id_idx" ON "footer_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_cta_path_idx" ON "footer_blocks_cta" USING btree ("_path");
  CREATE INDEX "footer_blocks_cta_background_background_image_idx" ON "footer_blocks_cta" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_cta_background_background_video_idx" ON "footer_blocks_cta" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_hero_trust_items_order_idx" ON "footer_blocks_hero_trust_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_hero_trust_items_parent_id_idx" ON "footer_blocks_hero_trust_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_hero_images_order_idx" ON "footer_blocks_hero_images" USING btree ("_order");
  CREATE INDEX "footer_blocks_hero_images_parent_id_idx" ON "footer_blocks_hero_images" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_hero_images_image_idx" ON "footer_blocks_hero_images" USING btree ("image_id");
  CREATE INDEX "footer_blocks_hero_order_idx" ON "footer_blocks_hero" USING btree ("_order");
  CREATE INDEX "footer_blocks_hero_parent_id_idx" ON "footer_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_hero_path_idx" ON "footer_blocks_hero" USING btree ("_path");
  CREATE INDEX "footer_blocks_hero_background_background_image_idx" ON "footer_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_hero_background_background_video_idx" ON "footer_blocks_hero" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_services_items_order_idx" ON "footer_blocks_services_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_services_items_parent_id_idx" ON "footer_blocks_services_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_services_items_custom_svg_idx" ON "footer_blocks_services_items" USING btree ("custom_svg_id");
  CREATE INDEX "footer_blocks_services_order_idx" ON "footer_blocks_services" USING btree ("_order");
  CREATE INDEX "footer_blocks_services_parent_id_idx" ON "footer_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_services_path_idx" ON "footer_blocks_services" USING btree ("_path");
  CREATE INDEX "footer_blocks_services_background_background_image_idx" ON "footer_blocks_services" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_services_background_background_video_idx" ON "footer_blocks_services" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_process_steps_order_idx" ON "footer_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "footer_blocks_process_steps_parent_id_idx" ON "footer_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_process_order_idx" ON "footer_blocks_process" USING btree ("_order");
  CREATE INDEX "footer_blocks_process_parent_id_idx" ON "footer_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_process_path_idx" ON "footer_blocks_process" USING btree ("_path");
  CREATE INDEX "footer_blocks_process_background_background_image_idx" ON "footer_blocks_process" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_process_background_background_video_idx" ON "footer_blocks_process" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_gallery_categories_order_idx" ON "footer_blocks_gallery_categories" USING btree ("_order");
  CREATE INDEX "footer_blocks_gallery_categories_parent_id_idx" ON "footer_blocks_gallery_categories" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_gallery_items_order_idx" ON "footer_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_gallery_items_parent_id_idx" ON "footer_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_gallery_items_image_idx" ON "footer_blocks_gallery_items" USING btree ("image_id");
  CREATE INDEX "footer_blocks_gallery_order_idx" ON "footer_blocks_gallery" USING btree ("_order");
  CREATE INDEX "footer_blocks_gallery_parent_id_idx" ON "footer_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_gallery_path_idx" ON "footer_blocks_gallery" USING btree ("_path");
  CREATE INDEX "footer_blocks_gallery_background_background_image_idx" ON "footer_blocks_gallery" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_gallery_background_background_video_idx" ON "footer_blocks_gallery" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_instagram_strip_order_idx" ON "footer_blocks_instagram_strip" USING btree ("_order");
  CREATE INDEX "footer_blocks_instagram_strip_parent_id_idx" ON "footer_blocks_instagram_strip" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_instagram_strip_path_idx" ON "footer_blocks_instagram_strip" USING btree ("_path");
  CREATE INDEX "footer_blocks_instagram_strip_background_background_imag_idx" ON "footer_blocks_instagram_strip" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_instagram_strip_background_background_vide_idx" ON "footer_blocks_instagram_strip" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_contact_items_order_idx" ON "footer_blocks_contact_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_contact_items_parent_id_idx" ON "footer_blocks_contact_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_contact_order_idx" ON "footer_blocks_contact" USING btree ("_order");
  CREATE INDEX "footer_blocks_contact_parent_id_idx" ON "footer_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_contact_path_idx" ON "footer_blocks_contact" USING btree ("_path");
  CREATE INDEX "footer_blocks_contact_background_background_image_idx" ON "footer_blocks_contact" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_contact_background_background_video_idx" ON "footer_blocks_contact" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_navbar_order_idx" ON "footer_blocks_navbar" USING btree ("_order");
  CREATE INDEX "footer_blocks_navbar_parent_id_idx" ON "footer_blocks_navbar" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_navbar_path_idx" ON "footer_blocks_navbar" USING btree ("_path");
  CREATE INDEX "footer_blocks_navbar_logo_idx" ON "footer_blocks_navbar" USING btree ("logo_id");
  CREATE INDEX "footer_blocks_navbar_menu_idx" ON "footer_blocks_navbar" USING btree ("menu_id");
  CREATE INDEX "footer_blocks_footer_columns_social_order_idx" ON "footer_blocks_footer_columns_social" USING btree ("_order");
  CREATE INDEX "footer_blocks_footer_columns_social_parent_id_idx" ON "footer_blocks_footer_columns_social" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_footer_columns_columns_links_order_idx" ON "footer_blocks_footer_columns_columns_links" USING btree ("_order");
  CREATE INDEX "footer_blocks_footer_columns_columns_links_parent_id_idx" ON "footer_blocks_footer_columns_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_footer_columns_columns_order_idx" ON "footer_blocks_footer_columns_columns" USING btree ("_order");
  CREATE INDEX "footer_blocks_footer_columns_columns_parent_id_idx" ON "footer_blocks_footer_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_footer_columns_order_idx" ON "footer_blocks_footer_columns" USING btree ("_order");
  CREATE INDEX "footer_blocks_footer_columns_parent_id_idx" ON "footer_blocks_footer_columns" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_footer_columns_path_idx" ON "footer_blocks_footer_columns" USING btree ("_path");
  CREATE INDEX "footer_blocks_footer_columns_logo_idx" ON "footer_blocks_footer_columns" USING btree ("logo_id");
  CREATE INDEX "footer_blocks_about_facts_order_idx" ON "footer_blocks_about_facts" USING btree ("_order");
  CREATE INDEX "footer_blocks_about_facts_parent_id_idx" ON "footer_blocks_about_facts" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_about_order_idx" ON "footer_blocks_about" USING btree ("_order");
  CREATE INDEX "footer_blocks_about_parent_id_idx" ON "footer_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_about_path_idx" ON "footer_blocks_about" USING btree ("_path");
  CREATE INDEX "footer_blocks_about_image_idx" ON "footer_blocks_about" USING btree ("image_id");
  CREATE INDEX "footer_blocks_about_background_background_image_idx" ON "footer_blocks_about" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_about_background_background_video_idx" ON "footer_blocks_about" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_pricing_price_blocks_rows_order_idx" ON "footer_blocks_pricing_price_blocks_rows" USING btree ("_order");
  CREATE INDEX "footer_blocks_pricing_price_blocks_rows_parent_id_idx" ON "footer_blocks_pricing_price_blocks_rows" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_pricing_price_blocks_order_idx" ON "footer_blocks_pricing_price_blocks" USING btree ("_order");
  CREATE INDEX "footer_blocks_pricing_price_blocks_parent_id_idx" ON "footer_blocks_pricing_price_blocks" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_pricing_order_idx" ON "footer_blocks_pricing" USING btree ("_order");
  CREATE INDEX "footer_blocks_pricing_parent_id_idx" ON "footer_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_pricing_path_idx" ON "footer_blocks_pricing" USING btree ("_path");
  CREATE INDEX "footer_blocks_pricing_button_button_internal_link_idx" ON "footer_blocks_pricing" USING btree ("button_internal_link_id");
  CREATE INDEX "footer_blocks_pricing_button_button_custom_svg_idx" ON "footer_blocks_pricing" USING btree ("button_custom_svg_id");
  CREATE INDEX "footer_blocks_pricing_background_background_image_idx" ON "footer_blocks_pricing" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_pricing_background_background_video_idx" ON "footer_blocks_pricing" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_faq_items_order_idx" ON "footer_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_faq_items_parent_id_idx" ON "footer_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_faq_order_idx" ON "footer_blocks_faq" USING btree ("_order");
  CREATE INDEX "footer_blocks_faq_parent_id_idx" ON "footer_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_faq_path_idx" ON "footer_blocks_faq" USING btree ("_path");
  CREATE INDEX "footer_blocks_faq_background_background_image_idx" ON "footer_blocks_faq" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_faq_background_background_video_idx" ON "footer_blocks_faq" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_testimonials_items_order_idx" ON "footer_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_testimonials_items_parent_id_idx" ON "footer_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_testimonials_items_avatar_idx" ON "footer_blocks_testimonials_items" USING btree ("avatar_id");
  CREATE INDEX "footer_blocks_testimonials_order_idx" ON "footer_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "footer_blocks_testimonials_parent_id_idx" ON "footer_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_testimonials_path_idx" ON "footer_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "footer_blocks_testimonials_background_background_image_idx" ON "footer_blocks_testimonials" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_testimonials_background_background_video_idx" ON "footer_blocks_testimonials" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_stats_items_order_idx" ON "footer_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_stats_items_parent_id_idx" ON "footer_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_stats_order_idx" ON "footer_blocks_stats" USING btree ("_order");
  CREATE INDEX "footer_blocks_stats_parent_id_idx" ON "footer_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_stats_path_idx" ON "footer_blocks_stats" USING btree ("_path");
  CREATE INDEX "footer_blocks_stats_background_background_image_idx" ON "footer_blocks_stats" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_stats_background_background_video_idx" ON "footer_blocks_stats" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_team_items_social_links_order_idx" ON "footer_blocks_team_items_social_links" USING btree ("_order");
  CREATE INDEX "footer_blocks_team_items_social_links_parent_id_idx" ON "footer_blocks_team_items_social_links" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_team_items_order_idx" ON "footer_blocks_team_items" USING btree ("_order");
  CREATE INDEX "footer_blocks_team_items_parent_id_idx" ON "footer_blocks_team_items" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_team_items_photo_idx" ON "footer_blocks_team_items" USING btree ("photo_id");
  CREATE INDEX "footer_blocks_team_order_idx" ON "footer_blocks_team" USING btree ("_order");
  CREATE INDEX "footer_blocks_team_parent_id_idx" ON "footer_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_team_path_idx" ON "footer_blocks_team" USING btree ("_path");
  CREATE INDEX "footer_blocks_team_background_background_image_idx" ON "footer_blocks_team" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_team_background_background_video_idx" ON "footer_blocks_team" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_form_block_order_idx" ON "footer_blocks_form_block" USING btree ("_order");
  CREATE INDEX "footer_blocks_form_block_parent_id_idx" ON "footer_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_form_block_path_idx" ON "footer_blocks_form_block" USING btree ("_path");
  CREATE INDEX "footer_blocks_form_block_form_idx" ON "footer_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "footer_blocks_form_block_background_background_image_idx" ON "footer_blocks_form_block" USING btree ("background_image_id");
  CREATE INDEX "footer_blocks_form_block_background_background_video_idx" ON "footer_blocks_form_block" USING btree ("background_video_id");
  CREATE INDEX "footer_blocks_divider_order_idx" ON "footer_blocks_divider" USING btree ("_order");
  CREATE INDEX "footer_blocks_divider_parent_id_idx" ON "footer_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_divider_path_idx" ON "footer_blocks_divider" USING btree ("_path");
  CREATE INDEX "footer_blocks_block_holder2_order_idx" ON "footer_blocks_block_holder2" USING btree ("_order");
  CREATE INDEX "footer_blocks_block_holder2_parent_id_idx" ON "footer_blocks_block_holder2" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_block_holder2_path_idx" ON "footer_blocks_block_holder2" USING btree ("_path");
  CREATE INDEX "footer_blocks_block_holder1_order_idx" ON "footer_blocks_block_holder1" USING btree ("_order");
  CREATE INDEX "footer_blocks_block_holder1_parent_id_idx" ON "footer_blocks_block_holder1" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_block_holder1_path_idx" ON "footer_blocks_block_holder1" USING btree ("_path");
  CREATE INDEX "footer_blocks_block_holder0_order_idx" ON "footer_blocks_block_holder0" USING btree ("_order");
  CREATE INDEX "footer_blocks_block_holder0_parent_id_idx" ON "footer_blocks_block_holder0" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_block_holder0_path_idx" ON "footer_blocks_block_holder0" USING btree ("_path");
  CREATE INDEX "footer_blocks_posts_block_order_idx" ON "footer_blocks_posts_block" USING btree ("_order");
  CREATE INDEX "footer_blocks_posts_block_parent_id_idx" ON "footer_blocks_posts_block" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_posts_block_path_idx" ON "footer_blocks_posts_block" USING btree ("_path");
  CREATE INDEX "footer_blocks_section_order_idx" ON "footer_blocks_section" USING btree ("_order");
  CREATE INDEX "footer_blocks_section_parent_id_idx" ON "footer_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_section_path_idx" ON "footer_blocks_section" USING btree ("_path");
  CREATE INDEX "footer_blocks_section_settings_background_settings_backg_idx" ON "footer_blocks_section" USING btree ("settings_background_image_id");
  CREATE INDEX "footer_blocks_section_settings_background_settings_bac_1_idx" ON "footer_blocks_section" USING btree ("settings_background_video_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_categories_id_idx" ON "footer_rels" USING btree ("categories_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings_logo_dark_idx" ON "site_settings" USING btree ("logo_dark_id");
  CREATE INDEX "site_settings_favicon_idx" ON "site_settings" USING btree ("favicon_id");
  CREATE INDEX "site_settings_apple_touch_icon_idx" ON "site_settings" USING btree ("apple_touch_icon_id");
  CREATE INDEX "site_settings_default_meta_default_meta_og_image_idx" ON "site_settings" USING btree ("default_meta_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_menu" CASCADE;
  DROP TABLE "pages_blocks_heading" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_image" CASCADE;
  DROP TABLE "pages_blocks_video" CASCADE;
  DROP TABLE "pages_blocks_button" CASCADE;
  DROP TABLE "pages_blocks_tabs_items" CASCADE;
  DROP TABLE "pages_blocks_tabs" CASCADE;
  DROP TABLE "pages_blocks_slider_slides" CASCADE;
  DROP TABLE "pages_blocks_slider" CASCADE;
  DROP TABLE "pages_blocks_accordion_items" CASCADE;
  DROP TABLE "pages_blocks_accordion" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_hero_trust_items" CASCADE;
  DROP TABLE "pages_blocks_hero_images" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_services_items" CASCADE;
  DROP TABLE "pages_blocks_services" CASCADE;
  DROP TABLE "pages_blocks_process_steps" CASCADE;
  DROP TABLE "pages_blocks_process" CASCADE;
  DROP TABLE "pages_blocks_gallery_categories" CASCADE;
  DROP TABLE "pages_blocks_gallery_items" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_instagram_strip" CASCADE;
  DROP TABLE "pages_blocks_contact_items" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages_blocks_navbar" CASCADE;
  DROP TABLE "pages_blocks_footer_columns_social" CASCADE;
  DROP TABLE "pages_blocks_footer_columns_columns_links" CASCADE;
  DROP TABLE "pages_blocks_footer_columns_columns" CASCADE;
  DROP TABLE "pages_blocks_footer_columns" CASCADE;
  DROP TABLE "pages_blocks_about_facts" CASCADE;
  DROP TABLE "pages_blocks_about" CASCADE;
  DROP TABLE "pages_blocks_pricing_price_blocks_rows" CASCADE;
  DROP TABLE "pages_blocks_pricing_price_blocks" CASCADE;
  DROP TABLE "pages_blocks_pricing" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_testimonials_items" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_stats_items" CASCADE;
  DROP TABLE "pages_blocks_stats" CASCADE;
  DROP TABLE "pages_blocks_team_items_social_links" CASCADE;
  DROP TABLE "pages_blocks_team_items" CASCADE;
  DROP TABLE "pages_blocks_team" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_divider" CASCADE;
  DROP TABLE "pages_blocks_block_holder2" CASCADE;
  DROP TABLE "pages_blocks_block_holder1" CASCADE;
  DROP TABLE "pages_blocks_block_holder0" CASCADE;
  DROP TABLE "pages_blocks_posts_block" CASCADE;
  DROP TABLE "pages_blocks_section" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "posts_blocks_menu" CASCADE;
  DROP TABLE "posts_blocks_heading" CASCADE;
  DROP TABLE "posts_blocks_rich_text" CASCADE;
  DROP TABLE "posts_blocks_image" CASCADE;
  DROP TABLE "posts_blocks_video" CASCADE;
  DROP TABLE "posts_blocks_button" CASCADE;
  DROP TABLE "posts_blocks_tabs_items" CASCADE;
  DROP TABLE "posts_blocks_tabs" CASCADE;
  DROP TABLE "posts_blocks_slider_slides" CASCADE;
  DROP TABLE "posts_blocks_slider" CASCADE;
  DROP TABLE "posts_blocks_accordion_items" CASCADE;
  DROP TABLE "posts_blocks_accordion" CASCADE;
  DROP TABLE "posts_blocks_cta" CASCADE;
  DROP TABLE "posts_blocks_hero_trust_items" CASCADE;
  DROP TABLE "posts_blocks_hero_images" CASCADE;
  DROP TABLE "posts_blocks_hero" CASCADE;
  DROP TABLE "posts_blocks_services_items" CASCADE;
  DROP TABLE "posts_blocks_services" CASCADE;
  DROP TABLE "posts_blocks_process_steps" CASCADE;
  DROP TABLE "posts_blocks_process" CASCADE;
  DROP TABLE "posts_blocks_gallery_categories" CASCADE;
  DROP TABLE "posts_blocks_gallery_items" CASCADE;
  DROP TABLE "posts_blocks_gallery" CASCADE;
  DROP TABLE "posts_blocks_instagram_strip" CASCADE;
  DROP TABLE "posts_blocks_contact_items" CASCADE;
  DROP TABLE "posts_blocks_contact" CASCADE;
  DROP TABLE "posts_blocks_navbar" CASCADE;
  DROP TABLE "posts_blocks_footer_columns_social" CASCADE;
  DROP TABLE "posts_blocks_footer_columns_columns_links" CASCADE;
  DROP TABLE "posts_blocks_footer_columns_columns" CASCADE;
  DROP TABLE "posts_blocks_footer_columns" CASCADE;
  DROP TABLE "posts_blocks_about_facts" CASCADE;
  DROP TABLE "posts_blocks_about" CASCADE;
  DROP TABLE "posts_blocks_pricing_price_blocks_rows" CASCADE;
  DROP TABLE "posts_blocks_pricing_price_blocks" CASCADE;
  DROP TABLE "posts_blocks_pricing" CASCADE;
  DROP TABLE "posts_blocks_faq_items" CASCADE;
  DROP TABLE "posts_blocks_faq" CASCADE;
  DROP TABLE "posts_blocks_testimonials_items" CASCADE;
  DROP TABLE "posts_blocks_testimonials" CASCADE;
  DROP TABLE "posts_blocks_stats_items" CASCADE;
  DROP TABLE "posts_blocks_stats" CASCADE;
  DROP TABLE "posts_blocks_team_items_social_links" CASCADE;
  DROP TABLE "posts_blocks_team_items" CASCADE;
  DROP TABLE "posts_blocks_team" CASCADE;
  DROP TABLE "posts_blocks_form_block" CASCADE;
  DROP TABLE "posts_blocks_divider" CASCADE;
  DROP TABLE "posts_blocks_block_holder2" CASCADE;
  DROP TABLE "posts_blocks_block_holder1" CASCADE;
  DROP TABLE "posts_blocks_block_holder0" CASCADE;
  DROP TABLE "posts_blocks_posts_block" CASCADE;
  DROP TABLE "posts_blocks_section" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "menus_items_children" CASCADE;
  DROP TABLE "menus_items" CASCADE;
  DROP TABLE "menus" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_rels" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "colors_colors" CASCADE;
  DROP TABLE "colors" CASCADE;
  DROP TABLE "header_blocks_menu" CASCADE;
  DROP TABLE "header_blocks_heading" CASCADE;
  DROP TABLE "header_blocks_rich_text" CASCADE;
  DROP TABLE "header_blocks_image" CASCADE;
  DROP TABLE "header_blocks_video" CASCADE;
  DROP TABLE "header_blocks_button" CASCADE;
  DROP TABLE "header_blocks_tabs_items" CASCADE;
  DROP TABLE "header_blocks_tabs" CASCADE;
  DROP TABLE "header_blocks_slider_slides" CASCADE;
  DROP TABLE "header_blocks_slider" CASCADE;
  DROP TABLE "header_blocks_accordion_items" CASCADE;
  DROP TABLE "header_blocks_accordion" CASCADE;
  DROP TABLE "header_blocks_cta" CASCADE;
  DROP TABLE "header_blocks_hero_trust_items" CASCADE;
  DROP TABLE "header_blocks_hero_images" CASCADE;
  DROP TABLE "header_blocks_hero" CASCADE;
  DROP TABLE "header_blocks_services_items" CASCADE;
  DROP TABLE "header_blocks_services" CASCADE;
  DROP TABLE "header_blocks_process_steps" CASCADE;
  DROP TABLE "header_blocks_process" CASCADE;
  DROP TABLE "header_blocks_gallery_categories" CASCADE;
  DROP TABLE "header_blocks_gallery_items" CASCADE;
  DROP TABLE "header_blocks_gallery" CASCADE;
  DROP TABLE "header_blocks_instagram_strip" CASCADE;
  DROP TABLE "header_blocks_contact_items" CASCADE;
  DROP TABLE "header_blocks_contact" CASCADE;
  DROP TABLE "header_blocks_navbar" CASCADE;
  DROP TABLE "header_blocks_footer_columns_social" CASCADE;
  DROP TABLE "header_blocks_footer_columns_columns_links" CASCADE;
  DROP TABLE "header_blocks_footer_columns_columns" CASCADE;
  DROP TABLE "header_blocks_footer_columns" CASCADE;
  DROP TABLE "header_blocks_about_facts" CASCADE;
  DROP TABLE "header_blocks_about" CASCADE;
  DROP TABLE "header_blocks_pricing_price_blocks_rows" CASCADE;
  DROP TABLE "header_blocks_pricing_price_blocks" CASCADE;
  DROP TABLE "header_blocks_pricing" CASCADE;
  DROP TABLE "header_blocks_faq_items" CASCADE;
  DROP TABLE "header_blocks_faq" CASCADE;
  DROP TABLE "header_blocks_testimonials_items" CASCADE;
  DROP TABLE "header_blocks_testimonials" CASCADE;
  DROP TABLE "header_blocks_stats_items" CASCADE;
  DROP TABLE "header_blocks_stats" CASCADE;
  DROP TABLE "header_blocks_team_items_social_links" CASCADE;
  DROP TABLE "header_blocks_team_items" CASCADE;
  DROP TABLE "header_blocks_team" CASCADE;
  DROP TABLE "header_blocks_form_block" CASCADE;
  DROP TABLE "header_blocks_divider" CASCADE;
  DROP TABLE "header_blocks_block_holder2" CASCADE;
  DROP TABLE "header_blocks_block_holder1" CASCADE;
  DROP TABLE "header_blocks_block_holder0" CASCADE;
  DROP TABLE "header_blocks_posts_block" CASCADE;
  DROP TABLE "header_blocks_section" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_blocks_menu" CASCADE;
  DROP TABLE "footer_blocks_heading" CASCADE;
  DROP TABLE "footer_blocks_rich_text" CASCADE;
  DROP TABLE "footer_blocks_image" CASCADE;
  DROP TABLE "footer_blocks_video" CASCADE;
  DROP TABLE "footer_blocks_button" CASCADE;
  DROP TABLE "footer_blocks_tabs_items" CASCADE;
  DROP TABLE "footer_blocks_tabs" CASCADE;
  DROP TABLE "footer_blocks_slider_slides" CASCADE;
  DROP TABLE "footer_blocks_slider" CASCADE;
  DROP TABLE "footer_blocks_accordion_items" CASCADE;
  DROP TABLE "footer_blocks_accordion" CASCADE;
  DROP TABLE "footer_blocks_cta" CASCADE;
  DROP TABLE "footer_blocks_hero_trust_items" CASCADE;
  DROP TABLE "footer_blocks_hero_images" CASCADE;
  DROP TABLE "footer_blocks_hero" CASCADE;
  DROP TABLE "footer_blocks_services_items" CASCADE;
  DROP TABLE "footer_blocks_services" CASCADE;
  DROP TABLE "footer_blocks_process_steps" CASCADE;
  DROP TABLE "footer_blocks_process" CASCADE;
  DROP TABLE "footer_blocks_gallery_categories" CASCADE;
  DROP TABLE "footer_blocks_gallery_items" CASCADE;
  DROP TABLE "footer_blocks_gallery" CASCADE;
  DROP TABLE "footer_blocks_instagram_strip" CASCADE;
  DROP TABLE "footer_blocks_contact_items" CASCADE;
  DROP TABLE "footer_blocks_contact" CASCADE;
  DROP TABLE "footer_blocks_navbar" CASCADE;
  DROP TABLE "footer_blocks_footer_columns_social" CASCADE;
  DROP TABLE "footer_blocks_footer_columns_columns_links" CASCADE;
  DROP TABLE "footer_blocks_footer_columns_columns" CASCADE;
  DROP TABLE "footer_blocks_footer_columns" CASCADE;
  DROP TABLE "footer_blocks_about_facts" CASCADE;
  DROP TABLE "footer_blocks_about" CASCADE;
  DROP TABLE "footer_blocks_pricing_price_blocks_rows" CASCADE;
  DROP TABLE "footer_blocks_pricing_price_blocks" CASCADE;
  DROP TABLE "footer_blocks_pricing" CASCADE;
  DROP TABLE "footer_blocks_faq_items" CASCADE;
  DROP TABLE "footer_blocks_faq" CASCADE;
  DROP TABLE "footer_blocks_testimonials_items" CASCADE;
  DROP TABLE "footer_blocks_testimonials" CASCADE;
  DROP TABLE "footer_blocks_stats_items" CASCADE;
  DROP TABLE "footer_blocks_stats" CASCADE;
  DROP TABLE "footer_blocks_team_items_social_links" CASCADE;
  DROP TABLE "footer_blocks_team_items" CASCADE;
  DROP TABLE "footer_blocks_team" CASCADE;
  DROP TABLE "footer_blocks_form_block" CASCADE;
  DROP TABLE "footer_blocks_divider" CASCADE;
  DROP TABLE "footer_blocks_block_holder2" CASCADE;
  DROP TABLE "footer_blocks_block_holder1" CASCADE;
  DROP TABLE "footer_blocks_block_holder0" CASCADE;
  DROP TABLE "footer_blocks_posts_block" CASCADE;
  DROP TABLE "footer_blocks_section" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_menu_orientation";
  DROP TYPE "public"."enum_pages_blocks_menu_variant";
  DROP TYPE "public"."enum_pages_blocks_heading_variant";
  DROP TYPE "public"."enum_pages_blocks_heading_title_tag";
  DROP TYPE "public"."enum_pages_blocks_rich_text_variant";
  DROP TYPE "public"."enum_pages_blocks_image_link_type";
  DROP TYPE "public"."enum_pages_blocks_image_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_video_source_type";
  DROP TYPE "public"."enum_pages_blocks_video_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_button_variant";
  DROP TYPE "public"."enum_pages_blocks_button_icon_type";
  DROP TYPE "public"."enum_pages_blocks_button_icon_position";
  DROP TYPE "public"."enum_pages_blocks_tabs_items_icon_type";
  DROP TYPE "public"."enum_pages_blocks_tabs_items_icon_position";
  DROP TYPE "public"."enum_pages_blocks_tabs_orientation";
  DROP TYPE "public"."enum_pages_blocks_tabs_variant";
  DROP TYPE "public"."enum_pages_blocks_tabs_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_tabs_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_tabs_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_tabs_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_slider_settings_orientation";
  DROP TYPE "public"."enum_pages_blocks_slider_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_slider_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_slider_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_slider_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_slider_background_type";
  DROP TYPE "public"."enum_pages_blocks_slider_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_accordion_items_icon_type";
  DROP TYPE "public"."enum_pages_blocks_accordion_items_icon_position";
  DROP TYPE "public"."enum_pages_blocks_accordion_variant";
  DROP TYPE "public"."enum_pages_blocks_accordion_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_accordion_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_accordion_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_accordion_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_accordion_background_type";
  DROP TYPE "public"."enum_pages_blocks_accordion_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_cta_alignment";
  DROP TYPE "public"."enum_pages_blocks_cta_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_cta_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_cta_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_cta_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_cta_background_type";
  DROP TYPE "public"."enum_pages_blocks_cta_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_hero_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_hero_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_hero_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_hero_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_hero_background_type";
  DROP TYPE "public"."enum_pages_blocks_hero_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_services_items_icon_type";
  DROP TYPE "public"."enum_pages_blocks_services_items_icon_position";
  DROP TYPE "public"."enum_pages_blocks_services_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_services_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_services_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_services_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_services_background_type";
  DROP TYPE "public"."enum_pages_blocks_services_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_process_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_process_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_process_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_process_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_process_background_type";
  DROP TYPE "public"."enum_pages_blocks_process_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_gallery_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_gallery_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_gallery_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_gallery_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_gallery_background_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_instagram_strip_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_instagram_strip_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_instagram_strip_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_instagram_strip_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_instagram_strip_background_type";
  DROP TYPE "public"."enum_pages_blocks_instagram_strip_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_contact_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_contact_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_contact_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_contact_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_contact_background_type";
  DROP TYPE "public"."enum_pages_blocks_contact_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_about_image_position";
  DROP TYPE "public"."enum_pages_blocks_about_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_about_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_about_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_about_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_about_background_type";
  DROP TYPE "public"."enum_pages_blocks_about_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_pricing_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_pricing_button_variant";
  DROP TYPE "public"."enum_pages_blocks_pricing_button_icon_type";
  DROP TYPE "public"."enum_pages_blocks_pricing_button_icon_position";
  DROP TYPE "public"."enum_pages_blocks_pricing_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_pricing_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_pricing_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_pricing_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_pricing_background_type";
  DROP TYPE "public"."enum_pages_blocks_pricing_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_faq_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_faq_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_faq_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_faq_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_faq_background_type";
  DROP TYPE "public"."enum_pages_blocks_faq_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_testimonials_layout";
  DROP TYPE "public"."enum_pages_blocks_testimonials_columns";
  DROP TYPE "public"."enum_pages_blocks_testimonials_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_testimonials_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_testimonials_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_testimonials_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_testimonials_background_type";
  DROP TYPE "public"."enum_pages_blocks_testimonials_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_stats_columns";
  DROP TYPE "public"."enum_pages_blocks_stats_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_stats_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_stats_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_stats_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_stats_background_type";
  DROP TYPE "public"."enum_pages_blocks_stats_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_team_items_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team_columns";
  DROP TYPE "public"."enum_pages_blocks_team_layout";
  DROP TYPE "public"."enum_pages_blocks_team_vertical_alignment";
  DROP TYPE "public"."enum_pages_blocks_team_flex_variant";
  DROP TYPE "public"."enum_pages_blocks_team_grid_variant";
  DROP TYPE "public"."enum_pages_blocks_team_gap";
  DROP TYPE "public"."enum_pages_blocks_team_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_team_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_team_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_team_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_team_background_type";
  DROP TYPE "public"."enum_pages_blocks_team_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_form_block_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_form_block_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_form_block_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_form_block_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_form_block_background_type";
  DROP TYPE "public"."enum_pages_blocks_form_block_background_gradient_theme";
  DROP TYPE "public"."enum_pages_blocks_divider_line_style";
  DROP TYPE "public"."enum_pages_blocks_divider_thickness";
  DROP TYPE "public"."enum_pages_blocks_divider_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_divider_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_divider_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_divider_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_block_holder2_layout";
  DROP TYPE "public"."enum_pages_blocks_block_holder2_vertical_alignment";
  DROP TYPE "public"."enum_pages_blocks_block_holder2_flex_variant";
  DROP TYPE "public"."enum_pages_blocks_block_holder2_grid_variant";
  DROP TYPE "public"."enum_pages_blocks_block_holder2_gap";
  DROP TYPE "public"."enum_pages_blocks_block_holder1_layout";
  DROP TYPE "public"."enum_pages_blocks_block_holder1_vertical_alignment";
  DROP TYPE "public"."enum_pages_blocks_block_holder1_flex_variant";
  DROP TYPE "public"."enum_pages_blocks_block_holder1_grid_variant";
  DROP TYPE "public"."enum_pages_blocks_block_holder1_gap";
  DROP TYPE "public"."enum_pages_blocks_block_holder0_layout";
  DROP TYPE "public"."enum_pages_blocks_block_holder0_vertical_alignment";
  DROP TYPE "public"."enum_pages_blocks_block_holder0_flex_variant";
  DROP TYPE "public"."enum_pages_blocks_block_holder0_grid_variant";
  DROP TYPE "public"."enum_pages_blocks_block_holder0_gap";
  DROP TYPE "public"."enum_pages_blocks_posts_block_populate_by";
  DROP TYPE "public"."enum_pages_blocks_posts_block_layout";
  DROP TYPE "public"."enum_pages_blocks_posts_block_gap";
  DROP TYPE "public"."enum_pages_blocks_posts_block_grid_columns";
  DROP TYPE "public"."enum_pages_blocks_section_settings_viewport";
  DROP TYPE "public"."enum_pages_blocks_section_settings_width_type";
  DROP TYPE "public"."enum_pages_blocks_section_settings_alignment";
  DROP TYPE "public"."enum_pages_blocks_section_settings_container_type";
  DROP TYPE "public"."enum_pages_blocks_section_settings_spacing_padding_top";
  DROP TYPE "public"."enum_pages_blocks_section_settings_spacing_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_section_settings_spacing_margin_top";
  DROP TYPE "public"."enum_pages_blocks_section_settings_spacing_margin_bottom";
  DROP TYPE "public"."enum_pages_blocks_section_settings_background_type";
  DROP TYPE "public"."enum_pages_blocks_section_settings_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_menu_orientation";
  DROP TYPE "public"."enum_posts_blocks_menu_variant";
  DROP TYPE "public"."enum_posts_blocks_heading_variant";
  DROP TYPE "public"."enum_posts_blocks_heading_title_tag";
  DROP TYPE "public"."enum_posts_blocks_rich_text_variant";
  DROP TYPE "public"."enum_posts_blocks_image_link_type";
  DROP TYPE "public"."enum_posts_blocks_image_aspect_ratio";
  DROP TYPE "public"."enum_posts_blocks_video_source_type";
  DROP TYPE "public"."enum_posts_blocks_video_aspect_ratio";
  DROP TYPE "public"."enum_posts_blocks_button_link_type";
  DROP TYPE "public"."enum_posts_blocks_button_variant";
  DROP TYPE "public"."enum_posts_blocks_button_icon_type";
  DROP TYPE "public"."enum_posts_blocks_button_icon_position";
  DROP TYPE "public"."enum_posts_blocks_tabs_items_icon_type";
  DROP TYPE "public"."enum_posts_blocks_tabs_items_icon_position";
  DROP TYPE "public"."enum_posts_blocks_tabs_orientation";
  DROP TYPE "public"."enum_posts_blocks_tabs_variant";
  DROP TYPE "public"."enum_posts_blocks_tabs_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_tabs_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_tabs_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_tabs_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_slider_settings_orientation";
  DROP TYPE "public"."enum_posts_blocks_slider_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_slider_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_slider_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_slider_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_slider_background_type";
  DROP TYPE "public"."enum_posts_blocks_slider_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_accordion_items_icon_type";
  DROP TYPE "public"."enum_posts_blocks_accordion_items_icon_position";
  DROP TYPE "public"."enum_posts_blocks_accordion_variant";
  DROP TYPE "public"."enum_posts_blocks_accordion_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_accordion_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_accordion_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_accordion_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_accordion_background_type";
  DROP TYPE "public"."enum_posts_blocks_accordion_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_cta_alignment";
  DROP TYPE "public"."enum_posts_blocks_cta_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_cta_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_cta_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_cta_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_cta_background_type";
  DROP TYPE "public"."enum_posts_blocks_cta_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_hero_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_hero_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_hero_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_hero_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_hero_background_type";
  DROP TYPE "public"."enum_posts_blocks_hero_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_services_items_icon_type";
  DROP TYPE "public"."enum_posts_blocks_services_items_icon_position";
  DROP TYPE "public"."enum_posts_blocks_services_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_services_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_services_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_services_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_services_background_type";
  DROP TYPE "public"."enum_posts_blocks_services_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_process_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_process_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_process_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_process_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_process_background_type";
  DROP TYPE "public"."enum_posts_blocks_process_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_gallery_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_gallery_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_gallery_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_gallery_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_gallery_background_type";
  DROP TYPE "public"."enum_posts_blocks_gallery_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_instagram_strip_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_instagram_strip_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_instagram_strip_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_instagram_strip_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_instagram_strip_background_type";
  DROP TYPE "public"."enum_posts_blocks_instagram_strip_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_contact_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_contact_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_contact_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_contact_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_contact_background_type";
  DROP TYPE "public"."enum_posts_blocks_contact_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_about_image_position";
  DROP TYPE "public"."enum_posts_blocks_about_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_about_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_about_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_about_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_about_background_type";
  DROP TYPE "public"."enum_posts_blocks_about_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_pricing_button_link_type";
  DROP TYPE "public"."enum_posts_blocks_pricing_button_variant";
  DROP TYPE "public"."enum_posts_blocks_pricing_button_icon_type";
  DROP TYPE "public"."enum_posts_blocks_pricing_button_icon_position";
  DROP TYPE "public"."enum_posts_blocks_pricing_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_pricing_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_pricing_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_pricing_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_pricing_background_type";
  DROP TYPE "public"."enum_posts_blocks_pricing_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_faq_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_faq_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_faq_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_faq_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_faq_background_type";
  DROP TYPE "public"."enum_posts_blocks_faq_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_testimonials_layout";
  DROP TYPE "public"."enum_posts_blocks_testimonials_columns";
  DROP TYPE "public"."enum_posts_blocks_testimonials_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_testimonials_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_testimonials_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_testimonials_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_testimonials_background_type";
  DROP TYPE "public"."enum_posts_blocks_testimonials_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_stats_columns";
  DROP TYPE "public"."enum_posts_blocks_stats_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_stats_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_stats_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_stats_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_stats_background_type";
  DROP TYPE "public"."enum_posts_blocks_stats_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_team_items_social_links_platform";
  DROP TYPE "public"."enum_posts_blocks_team_columns";
  DROP TYPE "public"."enum_posts_blocks_team_layout";
  DROP TYPE "public"."enum_posts_blocks_team_vertical_alignment";
  DROP TYPE "public"."enum_posts_blocks_team_flex_variant";
  DROP TYPE "public"."enum_posts_blocks_team_grid_variant";
  DROP TYPE "public"."enum_posts_blocks_team_gap";
  DROP TYPE "public"."enum_posts_blocks_team_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_team_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_team_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_team_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_team_background_type";
  DROP TYPE "public"."enum_posts_blocks_team_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_form_block_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_form_block_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_form_block_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_form_block_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_form_block_background_type";
  DROP TYPE "public"."enum_posts_blocks_form_block_background_gradient_theme";
  DROP TYPE "public"."enum_posts_blocks_divider_line_style";
  DROP TYPE "public"."enum_posts_blocks_divider_thickness";
  DROP TYPE "public"."enum_posts_blocks_divider_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_divider_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_divider_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_divider_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_block_holder2_layout";
  DROP TYPE "public"."enum_posts_blocks_block_holder2_vertical_alignment";
  DROP TYPE "public"."enum_posts_blocks_block_holder2_flex_variant";
  DROP TYPE "public"."enum_posts_blocks_block_holder2_grid_variant";
  DROP TYPE "public"."enum_posts_blocks_block_holder2_gap";
  DROP TYPE "public"."enum_posts_blocks_block_holder1_layout";
  DROP TYPE "public"."enum_posts_blocks_block_holder1_vertical_alignment";
  DROP TYPE "public"."enum_posts_blocks_block_holder1_flex_variant";
  DROP TYPE "public"."enum_posts_blocks_block_holder1_grid_variant";
  DROP TYPE "public"."enum_posts_blocks_block_holder1_gap";
  DROP TYPE "public"."enum_posts_blocks_block_holder0_layout";
  DROP TYPE "public"."enum_posts_blocks_block_holder0_vertical_alignment";
  DROP TYPE "public"."enum_posts_blocks_block_holder0_flex_variant";
  DROP TYPE "public"."enum_posts_blocks_block_holder0_grid_variant";
  DROP TYPE "public"."enum_posts_blocks_block_holder0_gap";
  DROP TYPE "public"."enum_posts_blocks_posts_block_populate_by";
  DROP TYPE "public"."enum_posts_blocks_posts_block_layout";
  DROP TYPE "public"."enum_posts_blocks_posts_block_gap";
  DROP TYPE "public"."enum_posts_blocks_posts_block_grid_columns";
  DROP TYPE "public"."enum_posts_blocks_section_settings_viewport";
  DROP TYPE "public"."enum_posts_blocks_section_settings_width_type";
  DROP TYPE "public"."enum_posts_blocks_section_settings_alignment";
  DROP TYPE "public"."enum_posts_blocks_section_settings_container_type";
  DROP TYPE "public"."enum_posts_blocks_section_settings_spacing_padding_top";
  DROP TYPE "public"."enum_posts_blocks_section_settings_spacing_padding_bottom";
  DROP TYPE "public"."enum_posts_blocks_section_settings_spacing_margin_top";
  DROP TYPE "public"."enum_posts_blocks_section_settings_spacing_margin_bottom";
  DROP TYPE "public"."enum_posts_blocks_section_settings_background_type";
  DROP TYPE "public"."enum_posts_blocks_section_settings_background_gradient_theme";
  DROP TYPE "public"."enum_menus_items_children_type";
  DROP TYPE "public"."enum_menus_items_type";
  DROP TYPE "public"."enum_menus_orientation";
  DROP TYPE "public"."enum_menus_variant";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_forms_redirect_type";
  DROP TYPE "public"."enum_header_blocks_menu_orientation";
  DROP TYPE "public"."enum_header_blocks_menu_variant";
  DROP TYPE "public"."enum_header_blocks_heading_variant";
  DROP TYPE "public"."enum_header_blocks_heading_title_tag";
  DROP TYPE "public"."enum_header_blocks_rich_text_variant";
  DROP TYPE "public"."enum_header_blocks_image_link_type";
  DROP TYPE "public"."enum_header_blocks_image_aspect_ratio";
  DROP TYPE "public"."enum_header_blocks_video_source_type";
  DROP TYPE "public"."enum_header_blocks_video_aspect_ratio";
  DROP TYPE "public"."enum_header_blocks_button_link_type";
  DROP TYPE "public"."enum_header_blocks_button_variant";
  DROP TYPE "public"."enum_header_blocks_button_icon_type";
  DROP TYPE "public"."enum_header_blocks_button_icon_position";
  DROP TYPE "public"."enum_header_blocks_tabs_items_icon_type";
  DROP TYPE "public"."enum_header_blocks_tabs_items_icon_position";
  DROP TYPE "public"."enum_header_blocks_tabs_orientation";
  DROP TYPE "public"."enum_header_blocks_tabs_variant";
  DROP TYPE "public"."enum_header_blocks_tabs_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_tabs_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_tabs_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_tabs_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_slider_settings_orientation";
  DROP TYPE "public"."enum_header_blocks_slider_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_slider_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_slider_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_slider_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_slider_background_type";
  DROP TYPE "public"."enum_header_blocks_slider_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_accordion_items_icon_type";
  DROP TYPE "public"."enum_header_blocks_accordion_items_icon_position";
  DROP TYPE "public"."enum_header_blocks_accordion_variant";
  DROP TYPE "public"."enum_header_blocks_accordion_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_accordion_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_accordion_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_accordion_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_accordion_background_type";
  DROP TYPE "public"."enum_header_blocks_accordion_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_cta_alignment";
  DROP TYPE "public"."enum_header_blocks_cta_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_cta_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_cta_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_cta_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_cta_background_type";
  DROP TYPE "public"."enum_header_blocks_cta_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_hero_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_hero_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_hero_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_hero_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_hero_background_type";
  DROP TYPE "public"."enum_header_blocks_hero_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_services_items_icon_type";
  DROP TYPE "public"."enum_header_blocks_services_items_icon_position";
  DROP TYPE "public"."enum_header_blocks_services_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_services_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_services_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_services_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_services_background_type";
  DROP TYPE "public"."enum_header_blocks_services_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_process_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_process_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_process_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_process_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_process_background_type";
  DROP TYPE "public"."enum_header_blocks_process_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_gallery_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_gallery_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_gallery_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_gallery_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_gallery_background_type";
  DROP TYPE "public"."enum_header_blocks_gallery_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_instagram_strip_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_instagram_strip_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_instagram_strip_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_instagram_strip_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_instagram_strip_background_type";
  DROP TYPE "public"."enum_header_blocks_instagram_strip_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_contact_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_contact_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_contact_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_contact_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_contact_background_type";
  DROP TYPE "public"."enum_header_blocks_contact_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_about_image_position";
  DROP TYPE "public"."enum_header_blocks_about_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_about_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_about_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_about_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_about_background_type";
  DROP TYPE "public"."enum_header_blocks_about_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_pricing_button_link_type";
  DROP TYPE "public"."enum_header_blocks_pricing_button_variant";
  DROP TYPE "public"."enum_header_blocks_pricing_button_icon_type";
  DROP TYPE "public"."enum_header_blocks_pricing_button_icon_position";
  DROP TYPE "public"."enum_header_blocks_pricing_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_pricing_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_pricing_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_pricing_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_pricing_background_type";
  DROP TYPE "public"."enum_header_blocks_pricing_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_faq_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_faq_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_faq_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_faq_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_faq_background_type";
  DROP TYPE "public"."enum_header_blocks_faq_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_testimonials_layout";
  DROP TYPE "public"."enum_header_blocks_testimonials_columns";
  DROP TYPE "public"."enum_header_blocks_testimonials_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_testimonials_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_testimonials_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_testimonials_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_testimonials_background_type";
  DROP TYPE "public"."enum_header_blocks_testimonials_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_stats_columns";
  DROP TYPE "public"."enum_header_blocks_stats_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_stats_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_stats_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_stats_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_stats_background_type";
  DROP TYPE "public"."enum_header_blocks_stats_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_team_items_social_links_platform";
  DROP TYPE "public"."enum_header_blocks_team_columns";
  DROP TYPE "public"."enum_header_blocks_team_layout";
  DROP TYPE "public"."enum_header_blocks_team_vertical_alignment";
  DROP TYPE "public"."enum_header_blocks_team_flex_variant";
  DROP TYPE "public"."enum_header_blocks_team_grid_variant";
  DROP TYPE "public"."enum_header_blocks_team_gap";
  DROP TYPE "public"."enum_header_blocks_team_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_team_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_team_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_team_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_team_background_type";
  DROP TYPE "public"."enum_header_blocks_team_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_form_block_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_form_block_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_form_block_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_form_block_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_form_block_background_type";
  DROP TYPE "public"."enum_header_blocks_form_block_background_gradient_theme";
  DROP TYPE "public"."enum_header_blocks_divider_line_style";
  DROP TYPE "public"."enum_header_blocks_divider_thickness";
  DROP TYPE "public"."enum_header_blocks_divider_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_divider_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_divider_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_divider_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_block_holder2_layout";
  DROP TYPE "public"."enum_header_blocks_block_holder2_vertical_alignment";
  DROP TYPE "public"."enum_header_blocks_block_holder2_flex_variant";
  DROP TYPE "public"."enum_header_blocks_block_holder2_grid_variant";
  DROP TYPE "public"."enum_header_blocks_block_holder2_gap";
  DROP TYPE "public"."enum_header_blocks_block_holder1_layout";
  DROP TYPE "public"."enum_header_blocks_block_holder1_vertical_alignment";
  DROP TYPE "public"."enum_header_blocks_block_holder1_flex_variant";
  DROP TYPE "public"."enum_header_blocks_block_holder1_grid_variant";
  DROP TYPE "public"."enum_header_blocks_block_holder1_gap";
  DROP TYPE "public"."enum_header_blocks_block_holder0_layout";
  DROP TYPE "public"."enum_header_blocks_block_holder0_vertical_alignment";
  DROP TYPE "public"."enum_header_blocks_block_holder0_flex_variant";
  DROP TYPE "public"."enum_header_blocks_block_holder0_grid_variant";
  DROP TYPE "public"."enum_header_blocks_block_holder0_gap";
  DROP TYPE "public"."enum_header_blocks_posts_block_populate_by";
  DROP TYPE "public"."enum_header_blocks_posts_block_layout";
  DROP TYPE "public"."enum_header_blocks_posts_block_gap";
  DROP TYPE "public"."enum_header_blocks_posts_block_grid_columns";
  DROP TYPE "public"."enum_header_blocks_section_settings_viewport";
  DROP TYPE "public"."enum_header_blocks_section_settings_width_type";
  DROP TYPE "public"."enum_header_blocks_section_settings_alignment";
  DROP TYPE "public"."enum_header_blocks_section_settings_container_type";
  DROP TYPE "public"."enum_header_blocks_section_settings_spacing_padding_top";
  DROP TYPE "public"."enum_header_blocks_section_settings_spacing_padding_bottom";
  DROP TYPE "public"."enum_header_blocks_section_settings_spacing_margin_top";
  DROP TYPE "public"."enum_header_blocks_section_settings_spacing_margin_bottom";
  DROP TYPE "public"."enum_header_blocks_section_settings_background_type";
  DROP TYPE "public"."enum_header_blocks_section_settings_background_gradient_theme";
  DROP TYPE "public"."enum_header_variant";
  DROP TYPE "public"."enum_header_sticky";
  DROP TYPE "public"."enum_footer_blocks_menu_orientation";
  DROP TYPE "public"."enum_footer_blocks_menu_variant";
  DROP TYPE "public"."enum_footer_blocks_heading_variant";
  DROP TYPE "public"."enum_footer_blocks_heading_title_tag";
  DROP TYPE "public"."enum_footer_blocks_rich_text_variant";
  DROP TYPE "public"."enum_footer_blocks_image_link_type";
  DROP TYPE "public"."enum_footer_blocks_image_aspect_ratio";
  DROP TYPE "public"."enum_footer_blocks_video_source_type";
  DROP TYPE "public"."enum_footer_blocks_video_aspect_ratio";
  DROP TYPE "public"."enum_footer_blocks_button_link_type";
  DROP TYPE "public"."enum_footer_blocks_button_variant";
  DROP TYPE "public"."enum_footer_blocks_button_icon_type";
  DROP TYPE "public"."enum_footer_blocks_button_icon_position";
  DROP TYPE "public"."enum_footer_blocks_tabs_items_icon_type";
  DROP TYPE "public"."enum_footer_blocks_tabs_items_icon_position";
  DROP TYPE "public"."enum_footer_blocks_tabs_orientation";
  DROP TYPE "public"."enum_footer_blocks_tabs_variant";
  DROP TYPE "public"."enum_footer_blocks_tabs_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_tabs_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_tabs_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_tabs_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_slider_settings_orientation";
  DROP TYPE "public"."enum_footer_blocks_slider_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_slider_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_slider_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_slider_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_slider_background_type";
  DROP TYPE "public"."enum_footer_blocks_slider_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_accordion_items_icon_type";
  DROP TYPE "public"."enum_footer_blocks_accordion_items_icon_position";
  DROP TYPE "public"."enum_footer_blocks_accordion_variant";
  DROP TYPE "public"."enum_footer_blocks_accordion_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_accordion_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_accordion_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_accordion_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_accordion_background_type";
  DROP TYPE "public"."enum_footer_blocks_accordion_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_cta_alignment";
  DROP TYPE "public"."enum_footer_blocks_cta_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_cta_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_cta_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_cta_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_cta_background_type";
  DROP TYPE "public"."enum_footer_blocks_cta_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_hero_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_hero_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_hero_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_hero_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_hero_background_type";
  DROP TYPE "public"."enum_footer_blocks_hero_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_services_items_icon_type";
  DROP TYPE "public"."enum_footer_blocks_services_items_icon_position";
  DROP TYPE "public"."enum_footer_blocks_services_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_services_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_services_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_services_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_services_background_type";
  DROP TYPE "public"."enum_footer_blocks_services_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_process_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_process_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_process_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_process_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_process_background_type";
  DROP TYPE "public"."enum_footer_blocks_process_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_gallery_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_gallery_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_gallery_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_gallery_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_gallery_background_type";
  DROP TYPE "public"."enum_footer_blocks_gallery_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_instagram_strip_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_instagram_strip_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_instagram_strip_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_instagram_strip_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_instagram_strip_background_type";
  DROP TYPE "public"."enum_footer_blocks_instagram_strip_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_contact_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_contact_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_contact_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_contact_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_contact_background_type";
  DROP TYPE "public"."enum_footer_blocks_contact_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_about_image_position";
  DROP TYPE "public"."enum_footer_blocks_about_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_about_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_about_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_about_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_about_background_type";
  DROP TYPE "public"."enum_footer_blocks_about_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_pricing_button_link_type";
  DROP TYPE "public"."enum_footer_blocks_pricing_button_variant";
  DROP TYPE "public"."enum_footer_blocks_pricing_button_icon_type";
  DROP TYPE "public"."enum_footer_blocks_pricing_button_icon_position";
  DROP TYPE "public"."enum_footer_blocks_pricing_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_pricing_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_pricing_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_pricing_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_pricing_background_type";
  DROP TYPE "public"."enum_footer_blocks_pricing_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_faq_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_faq_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_faq_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_faq_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_faq_background_type";
  DROP TYPE "public"."enum_footer_blocks_faq_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_testimonials_layout";
  DROP TYPE "public"."enum_footer_blocks_testimonials_columns";
  DROP TYPE "public"."enum_footer_blocks_testimonials_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_testimonials_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_testimonials_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_testimonials_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_testimonials_background_type";
  DROP TYPE "public"."enum_footer_blocks_testimonials_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_stats_columns";
  DROP TYPE "public"."enum_footer_blocks_stats_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_stats_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_stats_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_stats_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_stats_background_type";
  DROP TYPE "public"."enum_footer_blocks_stats_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_team_items_social_links_platform";
  DROP TYPE "public"."enum_footer_blocks_team_columns";
  DROP TYPE "public"."enum_footer_blocks_team_layout";
  DROP TYPE "public"."enum_footer_blocks_team_vertical_alignment";
  DROP TYPE "public"."enum_footer_blocks_team_flex_variant";
  DROP TYPE "public"."enum_footer_blocks_team_grid_variant";
  DROP TYPE "public"."enum_footer_blocks_team_gap";
  DROP TYPE "public"."enum_footer_blocks_team_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_team_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_team_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_team_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_team_background_type";
  DROP TYPE "public"."enum_footer_blocks_team_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_form_block_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_form_block_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_form_block_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_form_block_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_form_block_background_type";
  DROP TYPE "public"."enum_footer_blocks_form_block_background_gradient_theme";
  DROP TYPE "public"."enum_footer_blocks_divider_line_style";
  DROP TYPE "public"."enum_footer_blocks_divider_thickness";
  DROP TYPE "public"."enum_footer_blocks_divider_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_divider_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_divider_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_divider_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_block_holder2_layout";
  DROP TYPE "public"."enum_footer_blocks_block_holder2_vertical_alignment";
  DROP TYPE "public"."enum_footer_blocks_block_holder2_flex_variant";
  DROP TYPE "public"."enum_footer_blocks_block_holder2_grid_variant";
  DROP TYPE "public"."enum_footer_blocks_block_holder2_gap";
  DROP TYPE "public"."enum_footer_blocks_block_holder1_layout";
  DROP TYPE "public"."enum_footer_blocks_block_holder1_vertical_alignment";
  DROP TYPE "public"."enum_footer_blocks_block_holder1_flex_variant";
  DROP TYPE "public"."enum_footer_blocks_block_holder1_grid_variant";
  DROP TYPE "public"."enum_footer_blocks_block_holder1_gap";
  DROP TYPE "public"."enum_footer_blocks_block_holder0_layout";
  DROP TYPE "public"."enum_footer_blocks_block_holder0_vertical_alignment";
  DROP TYPE "public"."enum_footer_blocks_block_holder0_flex_variant";
  DROP TYPE "public"."enum_footer_blocks_block_holder0_grid_variant";
  DROP TYPE "public"."enum_footer_blocks_block_holder0_gap";
  DROP TYPE "public"."enum_footer_blocks_posts_block_populate_by";
  DROP TYPE "public"."enum_footer_blocks_posts_block_layout";
  DROP TYPE "public"."enum_footer_blocks_posts_block_gap";
  DROP TYPE "public"."enum_footer_blocks_posts_block_grid_columns";
  DROP TYPE "public"."enum_footer_blocks_section_settings_viewport";
  DROP TYPE "public"."enum_footer_blocks_section_settings_width_type";
  DROP TYPE "public"."enum_footer_blocks_section_settings_alignment";
  DROP TYPE "public"."enum_footer_blocks_section_settings_container_type";
  DROP TYPE "public"."enum_footer_blocks_section_settings_spacing_padding_top";
  DROP TYPE "public"."enum_footer_blocks_section_settings_spacing_padding_bottom";
  DROP TYPE "public"."enum_footer_blocks_section_settings_spacing_margin_top";
  DROP TYPE "public"."enum_footer_blocks_section_settings_spacing_margin_bottom";
  DROP TYPE "public"."enum_footer_blocks_section_settings_background_type";
  DROP TYPE "public"."enum_footer_blocks_section_settings_background_gradient_theme";
  DROP TYPE "public"."enum_footer_variant";
  DROP TYPE "public"."enum_site_settings_robots";`)
}
